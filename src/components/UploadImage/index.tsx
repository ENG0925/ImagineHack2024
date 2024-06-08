'use client';

import { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileCategory, setFileCategory] = useState("Selected file type will be displayed here.");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf"];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            if (allowedFileTypes.includes(file.type)) {
                setSelectedFile(file);
                setFileCategory(file.type);
                setErrorMessage("");
            } else {
                setSelectedFile(null);
                setFileCategory("Selected file type will be displayed here.");
                setErrorMessage("Invalid file type. Only JPG, PDF, and PNG files are allowed.");
            }
        } else {
            setSelectedFile(null);
            setFileCategory("Selected file type will be displayed here.");
            setErrorMessage("No file selected");
        }
    };

    const handleUploadClick = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (response.status === 200) {
                    setSuccessMessage("File uploaded successfully!");
                    setErrorMessage("");
                }
            } catch (error) {
                setErrorMessage("File upload failed. Please try again.");
                setSuccessMessage("");
            }
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

    return (
        <div className="container">
            <h1>File Type Categorizer</h1>
            <input type="file" id="fileInput" onChange={handleFileChange} />
            <p id="fileCategory">{fileCategory}</p>
            {errorMessage && (
                <div id="errorMessage" className="message">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div id="successMessage" className="message">
                    {successMessage}
                </div>
            )}
            <div className="button-container">
                <button id="cancelButton" onClick={handleCancelClick}>Cancel</button>
                <button id="uploadButton" onClick={handleUploadClick}>Upload</button>
            </div>
        </div>
    );
};

export default UploadImage;
