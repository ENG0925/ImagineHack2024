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

    const handleClicked = () => {
        console.log('clicked');
    }
    
    return (
        <div>
            <div className="header">
                <h2>Item List</h2>
                
                <button onClick={handleClicked}>
                    <span className="plus-icon">+</span> Add New Item
                </button>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Item Description</th>
                        <th>Item Quantity</th>
                        <th>Item Total Item Price</th>
                        <th>Item Unit Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.totalItemPrice}</td>
                            <td>{item.unitPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Page;