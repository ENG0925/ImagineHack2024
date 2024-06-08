'use client';

import { callAI } from "@/lib/function";

export default function Home() {
  const handleClick = async () => {
    const first = [
     
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
