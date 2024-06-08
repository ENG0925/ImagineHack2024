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

    const [queryInvoice] = await connection.execute(`
      SELECT 
        i.invoiceNumber,
        i.purchaseDate,
        i.totalAmount,
        i.totalTax,
        it.description,
        it.quantity,
        it.totalItemPrice,
        it.unitPrice
      FROM 
        item it
      LEFT JOIN 
        invoice i ON it.invoiceNumber = i.invoiceNumber
      GROUP BY
        it.description,
        it.quantity,
        it.totalItemPrice,
        it.unitPrice
    `);

    connection.end();

    const element: string[] = [
      'invoiceNumber',
      'purchaseDate',
      'totalAmount',
      'totalTax',
      'description',
      'quantity',
      'totalItemPrice',
      'unitPrice'
    ];
      
    console.log(queryInvoice);

    const giveAImsg = `${queryInvoice} this data about ${element} base on the provided data analysis and answer the question generate a report: ${msg}`

    const messages = [{ content: giveAImsg }];

    const result : any = await client.generateMessage({
      model: MODEL_NAME,
      prompt: { messages },
    });
  
    console.log("Palm:\n\n", result[0].candidates[0].content, "\n\n");
            
    return NextResponse.json({ 
        success: true, 
        message: 'successfully OCR the image'
    });
  } catch (err) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error to OCR the image' 
    });
  }
}