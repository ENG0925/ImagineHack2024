'use client';

import { getCustomer } from "@/lib/function";
import { useEffect, useState } from "react";

interface Customer {
    id: number;
    customerName: string;
    customerAddress: string;
}

const Page = () => {
    const [data, setData] = useState<Customer[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCustomer();
                if (response?.data?.data) {
                    setData(response.data.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const handleClicked = () => {
        console.log('clicked');
    }

    return (
        <div>
            <div className="header">
                <h2>Customer List</h2>
                
                <button onClick={handleClicked}>
                    <span className="plus-icon">+</span> Add New Customer
                </button>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.customerName}</td>
                            <td>{item.customerAddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;
