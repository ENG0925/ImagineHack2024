'use client';

import { OCRscan } from "@/lib/function"; // Import the OCRscan function

export default function Home() {
  
  const handleOCR = async () => {
    try {
      const response = await OCRscan('invoice.jpg');
      console.log(response); // Log the response from the OCR function
    } catch (error) {
      console.error("Error during OCR scan:", error); // Handle and log any errors
    }
  };

  return (
    <div>
      
    </div>
  );
}
