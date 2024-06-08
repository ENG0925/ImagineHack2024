import { NextResponse, NextRequest } from "next/server";
import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import mysql from 'mysql2/promise';
import { DBConfig } from "../../../../../config/db";

// model name and api key
const MODEL_NAME: string = "models/chat-bison-001";
const API_KEY: string = "AIzaSyAqhmBn0nVW1LhRhjgQiZcKBDQve4BLIBg";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    
    const { msg } = await req.json();
    
    const connection = await mysql.createConnection(DBConfig);

    const [queryInvoice] = await connection.execute(`SELECT * FROM item`);

    const [queryItem] = await connection.execute(`SELECT * FROM item`);

    connection.end();

    const element: string[] = [
      'Invoice:id',
      'Invoice:description',
      'Invoice:quantity',
      'Invoice:totalItemPrice',
      'Invoice:unitPrice',
      'Invoice:invoiceNumber:',
      'Item:id',
      'Item:description',
      'Item:quantity',
      'Item:totalItemPrice',
      'Item:unitPrice',
      'Item:invoiceNumber'
    ];
      
    const giveAImsg = `${queryInvoice} and ${queryItem} this data about ${element} base on the provided data analysis and answer the question: ${msg}`

    const messages = [{ content: giveAImsg }];

    const result : any = await client.generateMessage({
      model: MODEL_NAME,
      prompt: { messages },
    });
    
    console.log('data: ',result[0].candidates[0].content);
    
    const response = result[0].candidates[0].content;
            
    return NextResponse.json({ 
        success: true, 
        message: 'successfully OCR the image',
        data: response
    });
  } catch (err) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error to OCR the image' 
    });
  }
}