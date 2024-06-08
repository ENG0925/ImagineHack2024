'use client';

import { getInvoice } from "@/lib/function";
import { useEffect, useState } from "react";

interface Invocie {
    invoiceNumber: string;
    purchaseDate: string;
    totalAmount: number;
    totalTax: number;
    customerID: number;
    supplierID: number;
}

const Page = () => {
    const [data, setData] = useState<Invocie[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getInvoice();
                setData(response?.data.data);
            
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();

    }, []);
    
    return (
        <div>
        <h1>Supplier</h1>
        </div>
    );
}

export default Page;