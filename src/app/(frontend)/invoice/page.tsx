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

    const handleClicked = () => {
        console.log('clicked');
    }
    
    return (
        <div>
            <div className="header">
                <h2>Invoice List</h2>
                
                <button onClick={handleClicked}>
                    <span className="plus-icon">+</span> Add New Invoice
                </button>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Invoice Number</th>
                        <th>Invoice Purchase Date</th>
                        <th>Invoice Total Amount</th>
                        <th>Invoice Total Tax</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.invoiceNumber}>
                            <td>{item.invoiceNumber}</td>
                            <td>{item.purchaseDate}</td>
                            <td>{item.totalAmount}</td>
                            <td>{item.totalTax}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Page;