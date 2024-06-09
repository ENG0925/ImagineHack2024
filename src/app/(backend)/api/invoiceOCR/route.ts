import { NextResponse, NextRequest } from "next/server";
import * as mindee from "mindee";
import { connect } from "http2";
import mysql from 'mysql2/promise';
import { DBConfig } from "../../../../../config/db";

interface InvoiceRequest {
    invoiceNumber: string;
    purchaseDate: string;
    totalAmount: string;
    totalTax: string;
}

interface ItemRequest {
    description: string;
    quantity: string;
    totalItemPrice: string;
    unitPrice: string;
}

interface CustomerRequest {
    customerName: string;
    customerAddress: string;
}

interface SupplierRequest {
    supplierName: string;
    supplierAddress: string;
    supplierPhoneNumber: string;
    supplierEmail: string;
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
        
        const connection = await mysql.createConnection(DBConfig);
        const mindeeClient = new mindee.Client({ apiKey: "1e9b7fe0c78748caae5857fecbd5e303" });

        // Load a file from disk
        const inputSource = mindeeClient.docFromPath(`C:/Users/User/Documents/ImagineHack2024/src/image/profound inv 2402-0001.pdf`);

        // Parse the file
        const apiResponse : any = mindeeClient.parse(
            mindee.product.InvoiceV4,
            inputSource 
        ); 

       
        // Handle the response Promise
        apiResponse.then(async(resp: any) => {
        
            console.log(resp.document.toString());
            
            const invoiceData: InvoiceRequest = {
                invoiceNumber: resp.document.inference.prediction.invoiceNumber.value,
                purchaseDate: resp.document.inference.prediction.date.value,
                totalAmount: resp.document.inference.prediction.totalAmount.value,
                totalTax: resp.document.inference.prediction.totalTax.value,
            };

            const itemData: ItemRequest = resp.document.inference.prediction.lineItems.map((item: any) => ({
                description: item.description,
                quantity: item.quantity,
                totalItemPrice: item.totalAmount,
                unitPrice: item.unitPrice,
            }))

            const customerData: CustomerRequest = {
                customerName: resp.document.inference.prediction.customerName.value,
                customerAddress: resp.document.inference.prediction.customerAddress.value,
            }
            
            const supplierData: SupplierRequest = {
                supplierName: resp.document.inference.prediction.supplierName.value,
                supplierAddress: resp.document.inference.prediction.supplierAddress.value,
                supplierPhoneNumber: resp.document.inference.prediction.supplierPhoneNumber.value,
                supplierEmail: resp.document.inference.prediction.supplierEmail.value,
            }

            const [queryCustomerName] = await connection.execute(`SELECT * FROM customer WHERE customerName = ?`, [customerData.customerName]);
            const customerName = queryCustomerName as [];
            if(customerName.length === 0) {
                await connection.execute(`INSERT INTO customer (customerName, customerAddress) VALUES (?, ?)`, [customerData.customerName, customerData.customerAddress]);
            }

            const [querySupplierName] = await connection.execute(`SELECT * FROM supplier WHERE supplierName = ?`, [supplierData.supplierName]);
            const supplierName = querySupplierName as [];
            if(supplierName.length === 0) {
                await connection.execute(`INSERT INTO supplier (supplierName, supplierAddress, supplierPhoneNumber, supplierEmail) VALUES (?, ?, ?, ?)`, [supplierData.supplierName, supplierData.supplierAddress, supplierData.supplierPhoneNumber, supplierData.supplierEmail]);
            }

            await connection.execute(`
                INSERT INTO
                    invoice
                    (invoiceNumber, purchaseDate, totalAmount, totalTax, customerName, supplierName)
                VALUES
                      (?, ?, ?, ?)
                `, [invoiceData.invoiceNumber, invoiceData.purchaseDate, invoiceData.totalAmount, invoiceData.totalTax, customerData.customerName, supplierData.supplierName]
            );

            await connection.execute(`
                INSERT INTO
                    item
                    (description, quantity, totalItemPrice, unitPrice, invoiceNumber)
                VALUES
                      (?, ?, ?, ?)
                `, [itemData.description, itemData.quantity, itemData.totalItemPrice, itemData.unitPrice, invoiceData.invoiceNumber]
            );
                
        });

        return NextResponse.json({ 
            success: true, 
            message: 'successfully OCR the image'
        });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ 
      success: false, 
      message: 'Error to OCR the image' 
    });
  }
}