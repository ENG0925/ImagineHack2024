'use client';

import { getCustomer } from "@/lib/function";
import { useEffect, useState } from "react";
import './styles.css';

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
                setData(response?.data.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="header">
                <h2>Invoice List</h2>
                <a href="testFile.html" className="button-link">
                    <button id="InvoiceList">
                        <span className="plus-icon">+</span> Add New Invoice
                    </button>
                </a>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Supplier Name</th>
                        <th>Supplier Address</th>
                        <th>Supplier Phone Number</th>
                        <th>Supplier Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.customerName}</td>
                            <td>{customer.customerAddress}</td>
                            <td>123-456-7890</td> {/* Placeholder phone number */}
                            <td>supplier@example.com</td> {/* Placeholder email */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;
