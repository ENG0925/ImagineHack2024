import { NextResponse, NextRequest } from "next/server";
import * as mindee from "mindee";

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
        
            // console.log(resp.document.toString());
            // console.log('invocie: ',resp.document.inference.prediction.invoiceNumber.value);
            console.log('Name: ',resp.document.inference.prediction.customerName.value);
            for (const lineItemsElem of resp.document.inference.prediction.lineItems) {
                console.log('item: ',lineItemsElem.description);
            }
        });

    return NextResponse.json({ 
        success: true, 
        message: 'successfully OCR the image',
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ 
      success: false, 
      message: 'Error to OCR the image' 
    });
  }
}