'use client';

import { callAI } from "@/lib/function";

export default function Home() {
  const handleClick = async () => {
    
    await callAI("generated a finance report");
    
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
