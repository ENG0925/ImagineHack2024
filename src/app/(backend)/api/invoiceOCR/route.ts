import { NextResponse, NextRequest } from "next/server";
import * as mindee from "mindee";

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



export async function POST(req: NextRequest, res: NextResponse) {
  try {
        const { image } = await req.json();
        
        const mindeeClient = new mindee.Client({ apiKey: "1e9b7fe0c78748caae5857fecbd5e303" });

        // Load a file from disk
        const inputSource = mindeeClient.docFromPath(`C:/Users/User/Documents/ImagineHack2024/src/image/${image}`);

        // Parse the file
        const apiResponse : any = mindeeClient.parse(
            mindee.product.InvoiceV4,
            inputSource 
        ); 

       
        // Handle the response Promise
        apiResponse.then((resp: any) => {
        
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
            
            return NextResponse.json({ 
                success: true, 
                message: 'successfully OCR the image',
                invoice: invoiceData,
                items: itemData,
                customer: customerData,
                supplier: supplierData
            });
            
            
        });

        

  } catch (err) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error to OCR the image' 
    });
  }
}