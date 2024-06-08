import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { invoiceNo } = await req.json();

       return NextResponse.json({ 
      success: true, 
      message: 'Get all invoice info successfully',
      data: invoice,
    });
  } catch (err) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error to get all invoice API' 
    });
  }
}