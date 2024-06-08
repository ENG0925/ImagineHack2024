'use client';

import { callAI } from "@/lib/function";

export default function Home() {
  const handleClick = async () => {
    const first = [
      {1, 'Alice Johnson', '123 Maple Street', 'INV001', '2024-06-01', 1000.0, 100.0, 1, 1, 1, 'Item A', 10.0, 100.0, 10.0, 'INV001'},
      {1, 'Alice Johnson', '123 Maple Street', 'INV001', '2024-06-01', 1000.0, 100.0, 1, 1, 21, 'Item U', 10.0, 150.0, 15.0, 'INV001'},
      {2, 'Bob Smith', '456 Oak Avenue', 'INV002', '2024-06-02', 1500.0, 150.0, 2, 2, 2, 'Item B', 20.0, 200.0, 10.0, 'INV002'},
      {2, 'Bob Smith', '456 Oak Avenue', 'INV002', '2024-06-02', 1500.0, 150.0, 2, 2, 22, 'Item V', 20.0, 300.0, 15.0, 'INV002'},
      {3, 'Charlie Brown', '789 Pine Lane', 'INV003', '2024-06-03', 2000.0, 200.0, 3, 3, 3, 'Item C', 30.0, 300.0, 10.0, 'INV003'},
      {3, 'Charlie Brown', '789 Pine Lane', 'INV003', '2024-06-03', 2000.0, 200.0, 3, 3, 23, 'Item W', 30.0, 450.0, 15.0, 'INV003'},
      {4, 'Daisy Miller', '101 Birch Road', 'INV004', '2024-06-04', 2500.0, 250.0, 4, 4, 4, 'Item D', 40.0, 400.0, 10.0, 'INV004'},
      {5, 'Eve Davis', '202 Cedar Street', 'INV005', '2024-06-05', 3000.0, 300.0, 5, 5, 5, 'Item E', 50.0, 500.0, 10.0, 'INV005'},
      {6, 'Frank Harris', '303 Spruce Avenue', 'INV006', '2024-06-06', 3500.0, 350.0, 6, 6, 6, 'Item F', 60.0, 600.0, 10.0, 'INV006'},
      {7, 'Grace Wilson', '404 Elm Drive', 'INV007', '2024-06-07', 4000.0, 400.0, 7, 7, 7, 'Item G', 70.0, 700.0, 10.0, 'INV007'},
      {8, 'Henry Clark', '505 Ash Lane', 'INV008', '2024-06-08', 4500.0, 450.0, 8, 8, 8, 'Item H', 80.0, 800.0, 10.0, 'INV008'},
      {9, 'Ivy Adams', '606 Willow Street', 'INV009', '2024-06-09', 5000.0, 500.0, 9, 9, 9, 'Item I', 90.0, 900.0, 10.0, 'INV009'},
      {10, 'Jack White', '707 Chestnut Road', 'INV010', '2024-06-10', 5500.0, 550.0, 10, 10, 10, 'Item J', 100.0, 1000.0, 10.0, 'INV010'},
      {11, 'Kathy Lee', '808 Palm Avenue', 'INV011', '2024-06-11', 6000.0, 600.0, 11, 11, 11, 'Item K', 110.0, 1100.0, 10.0, 'INV011'},
      {12, 'Liam Scott', '909 Fir Drive', 'INV012', '2024-06-12', 6500.0, 650.0, 12, 12, 12, 'Item L', 120.0, 1200.0, 10.0, 'INV012'},
      {13, 'Mona King', '1001 Cypress Lane', 'INV013', '2024-06-13', 7000.0, 700.0, 13, 13, 13, 'Item M', 130.0, 1300.0, 10.0, 'INV013'},
      {14, 'Nate Young', '1102 Redwood Street', 'INV014', '2024-06-14', 7500.0, 750.0, 14, 14, 14, 'Item N', 140.0, 1400.0, 10.0, 'INV014'},
      {15, 'Olive Turner', '1203 Alder Road', 'INV015', '2024-06-15', 8000.0, 800.0, 15, 15, 15, 'Item O', 150.0, 1500.0, 10.0, 'INV015'},
      {16, 'Paul Baker', '1304 Magnolia Avenue', 'INV016', '2024-06-16', 8500.0, 850.0, 16, 16, 16, 'Item P', 160.0, 1600.0, 10.0, 'INV016'},
      {17, 'Quinn Hall', '1405 Poplar Lane', 'INV017', '2024-06-17', 9000.0, 900.0, 17, 17, 17, 'Item Q', 170.0, 1700.0, 10.0,},
    ]

    const response = await callAI("Hello");
    console.log(response);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
