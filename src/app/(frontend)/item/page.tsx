'use client';

import { getItem } from "@/lib/function";
import { useEffect, useState } from "react";

interface Item {
    id: number;
    description: string;
    quantity: number;
    totalItemPrice: number;
    unitPrice: number;
    invoiceNumber: number;
}

const Page = () => {
    const [data, setData] = useState<Item[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getItem();
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