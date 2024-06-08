import axios from "axios";

const OCRscan = async (image: string) => {
    try {
        const response = await axios.post("http://localhost:3000/api/invoiceOCR", {image})
        return response;
    } catch (err) {
        console.error(err);
    }
};