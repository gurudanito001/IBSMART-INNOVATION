import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { Product } from "@/app/products";
import { randomUUID } from "crypto";


const dataFilePath = path.join(process.cwd(), 'src/app/db/products.json');



export async function GET(request: Request) {
  try {
    
    const jsonData = await readFile(dataFilePath);
    const data: Product[] = JSON.parse(jsonData.toString());

    return new NextResponse(JSON.stringify({ message: "Data fetched successfully", data}), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }); 
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message, data: null}), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }); 
  }
}


export async function POST(request: Request) {
  try {
    const jsonData = await readFile(dataFilePath);
    const data: Product[] = JSON.parse(jsonData.toString());
    let newData = await request.json(); 
    const uuid = randomUUID();
    newData = {id: uuid, ...newData};
    data.unshift(newData);
    const updatedData = JSON.stringify(data);
    await writeFile(dataFilePath, updatedData);

    return new NextResponse(JSON.stringify({ message: "Data created successfully"}), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }); 

  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
} 
