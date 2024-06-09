import axios from "axios";

export const OCRscan = async () => {
    try {
        const response = await axios.get("/api/invoiceOCR")
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const callAI = async (msg: string) => {
    try {
        const response = await axios.post("/api/callAI", { msg })
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const getInvoice = async () => {
    try {
        const response = await axios.get("/api/getTableInvoice")
        return response;
    } catch (err) {
        console.log(err);
    }
}

export const getSupplier = async () => {
    try {
        const response = await axios.get("/api/getTableSupplier")
        return response;
    } catch (err) {
        console.log(err);
    }
}

export const getItem = async () => {
    try {
        const response = await axios.get("/api/getTableItem")
        return response;
    } catch (err) {
        console.log(err);
    }
}

export const getCustomer = async () => {
    try {
        const response = await axios.get("/api/getTableCustomer")
        return response;
    } catch (err) {
        console.log(err);
    }
}

// export const writeFileFunction = async (file: File, fileName: string) => {
//     try {
//         const response = await axios.get("/api/writeFile", { file, fileName })
//         return response;
//     } catch (err) {
//         console.log(err);
//     }
// };