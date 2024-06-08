import { NextResponse, NextRequest } from "next/server";
import Invoice from "@/image/invoice.jpg";
import * as mindee from "mindee";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
        // const { image } = await req.json();
        // console.log(image);
        // const mindee = require("mindee");
        
        const mindeeClient = new mindee.Client({ apiKey: "1e9b7fe0c78748caae5857fecbd5e303" });

        // Load a file from disk
        const inputSource = mindeeClient.docFromPath('C:/Users/User/Documents/ImagineHack2024/src/image/profound inv 2402-0001.pdf');

        // Parse the file
        const apiResponse = mindeeClient.parse(
            mindee.product.InvoiceV4,
            inputSource 
        );

        // Handle the response Promise
        apiResponse.then((resp: any) => {
        
            console.log(resp.document.toString());
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