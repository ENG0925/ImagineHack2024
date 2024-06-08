'use client';

import React, { Component } from 'react';
import { callAI } from "@/lib/function";
import NavBar from "@/components/dashboard"

export default function Home() {
  const handleClick = async () => {
    
    await callAI("generated a finance report and give some suggestion to improve the finance report.");
    
  }

  
  return (
    <div>
      <NavBar/>
    </div>
  );
}
