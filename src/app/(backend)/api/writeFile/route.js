import { NextResponse } from 'next/server';
import formidable from 'formidable';
import path from "path";
import fs from "fs";

const express = require('express');
const app = express();
const multer = require('multer');

export async function POST(req) {
  try {
    
    const { fileData } = await req.json();

    

    const folder = 'C:/Users/User/Documents/ImagineHack2024/src/image/';

    return NextResponse.json({
      success: false,
      message: 'Error handling the request'
    });
 
  } catch (err) {
    console.error('Error handling the request:', err);
    return NextResponse.json({
      success: false,
      message: 'Error handling the request'
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
