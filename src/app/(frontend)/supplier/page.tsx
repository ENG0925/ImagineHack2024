'use client';

import UploadImage from "@/components/UploadImage";
import { getSupplier } from "@/lib/function";
import { useEffect, useState } from "react";

interface Supplier {
    id: number;
    supplierName: string;
    supplierAddress: string;
    supplierPhoneNumber: string;
    supplierEmail: string;
}

const Page = () => {
    const [data, setData] = useState<Supplier[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSupplier();
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
    };

    return (
        <div>
            <div className="header">
                <h2>Supplier List</h2>
                <button onClick={handleClicked}>
                    <span className="plus-icon">+</span> Add New Supplier
                </button>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Supplier Name</th>
                        <th>Supplier Address</th>
                        <th>Supplier Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.supplierName}</td>
                            <td>{item.supplierAddress}</td>
                            <td>{item.supplierPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;
