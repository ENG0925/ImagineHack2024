import { NextResponse, NextRequest } from "next/server";
import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

// model name and api key
const MODEL_NAME: string = "models/chat-bison-001";
const API_KEY: string = "AIzaSyAqhmBn0nVW1LhRhjgQiZcKBDQve4BLIBg";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    
    const { msg } = await req.json();
    const messages = [{ content: msg }];

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