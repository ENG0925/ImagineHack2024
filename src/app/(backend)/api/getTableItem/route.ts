import { NextResponse, NextRequest } from "next/server";
import mysql from 'mysql2/promise';
import { DBConfig } from "../../../../../config/db";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const connection = await mysql.createConnection(DBConfig);

    const [queryItem] = await connection.execute(`SELECT * FROM item`);

    connection.end();
    

    return NextResponse.json({ 
        success: true, 
        message: 'successfully get item info',
        data: queryItem
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ 
      success: false, 
      message: 'Error to get item info' 
    });
  }
}