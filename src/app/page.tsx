'use client';

import { OCRscan } from "@/lib/function"; // Import the OCRscan function
import Invoice from "@/image/invoice.jpg"; // Import the image of the invoice

export default function Home() {
  
  const handleOCR = async () => {
    try {
      const response = await OCRscan(); // Call the OCRscan function with the Invoice image
      console.log(response); // Log the response from the OCR function
    } catch (error) {
      console.error("Error during OCR scan:", error); // Handle and log any errors
    }
  };

  return (
    <div>
      hi
      <button onClick={handleOCR}>Click me</button> 
    </div>
  );
}
