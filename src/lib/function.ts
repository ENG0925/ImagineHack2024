import axios from "axios";

export const OCRscan = async (image: string) => {
    try {
        const response = await axios.post("/api/invoiceOCR", { image })
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const callAI = async () => {
    try {
        const response = await axios.get("/api/callAI")
        return response;
    } catch (err) {
        console.log(err);
    }
};