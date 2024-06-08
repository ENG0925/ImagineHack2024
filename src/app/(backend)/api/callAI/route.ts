import { NextResponse, NextRequest } from "next/server";
import { exec } from 'child_process';
import { title } from "process";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
        const scriptPath = 'C:/Users/User/Documents/ImagineHack2024/src/app/(backend)/api/predict.py'; 
        const pythonCommand = `python ${scriptPath}`;
    
        exec(pythonCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
    
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
    
        console.log(`Output: ${stdout}`);
        });
            
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