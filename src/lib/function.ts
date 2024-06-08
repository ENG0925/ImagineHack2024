import axios from "axios";

export const OCRscan = async () => {
    try {
        const response = await axios.get("/api/invoiceOCR")
        return response;
    } catch (err) {
        console.log(err);
    }
};