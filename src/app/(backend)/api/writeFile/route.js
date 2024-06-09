import { NextResponse } from 'next/server';
import formidable from 'formidable';

export async function POST(req) {
  try {
    // Create an instance of formidable
    const form = new formidable.IncomingForm({
      uploadDir: 'C:/Users/User/Documents/ImagineHack2024/src/image/',
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5 MB
      filename: (name, ext, part, form) => {
        // Generate a unique filename
        return `${Date.now()}-${part.originalFilename}`;
      }
    });

    // Parse the incoming form with file data
    await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        }
        resolve({ fields, files });
      });
    });

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully'
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
    bodyParser: false, // Disable Next.js default body parsing
  },
};
