'use client';

import { useState } from 'react';

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [fileCategory, setFileCategory] = useState("Selected file type will be displayed here.");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFileCategory(file.type);
            setErrorMessage("");
        } else {
            setFileCategory("Selected file type will be displayed here.");
            setErrorMessage("No file selected");
        }
    };

    const handleUploadClick = () => {
        if (selectedFile) {
            setErrorMessage("");
            setSuccessMessage("");
            setConfirmationVisible(true);
        } else {
            setErrorMessage("No file selected");
        }
    };

    const handleCancelClick = () => {
        setSelectedFile(null);
        setFileCategory("Selected file type will be displayed here.");
        setErrorMessage("");
        setSuccessMessage("");
    };

    const handleConfirmUpload = () => {
        setSuccessMessage("File uploaded successfully!");
        setConfirmationVisible(false);
        setSelectedFile(null);
        setFileCategory("Selected file type will be displayed here.");
    };

    const handleCancelUpload = () => {
        setConfirmationVisible(false);
    };

    return (
        <div className="container">
            <h1>File Type Categorizer</h1>
            <input type="file" id="fileInput" onChange={handleFileChange} />
            <p id="fileCategory">{fileCategory}</p>
            {errorMessage && (
                <div id="errorMessage" className="message">
                    <svg className="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div id="successMessage" className="message">
                    <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
                    </svg>
                    {successMessage}
                </div>
            )}
            <div className="button-container">
                <button id="cancelButton" onClick={handleCancelClick}>Cancel</button>
                <button id="uploadButton" onClick={handleUploadClick}>Upload</button>
            </div>

            {confirmationVisible && (
                <div id="confirmationModal" className="modal">
                    <div className="modal-content">
                        <p id="modalText">Are you sure you want to upload this file?</p>
                        <table id="fileDetailsTable">
                            <tr>
                                <th>Title</th>
                                <th>Pricing</th>
                                <th>Code</th>
                            </tr>
                            <tr>
                                <td id="fileTitle">{selectedFile ? selectedFile.name : ''}</td>
                                <td id="filePricing">N/A</td>
                                <td id="fileCode">N/A</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Supplier Name</th>
                                <th>Supplier Address</th>
                                <th>Supplier Phone Number</th>
                                <th>Supplier Email</th>
                            </tr>
                            <tr>
                                <td>Supplier One</td>
                                <td>1001 Supplier Blvd</td>
                                <td>123-456-7890</td>
                                <td>suppier1@example.com</td>
                            </tr>
                        </table>
                        <div className="modal-buttons">
                            <button id="cancelUploadButton" onClick={handleCancelUpload}>Cancel</button>
                            <button id="confirmUploadButton" onClick={handleConfirmUpload}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadImage;
