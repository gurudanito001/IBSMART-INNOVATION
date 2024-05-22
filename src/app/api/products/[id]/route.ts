import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { Product } from "@/app/products";
import { randomUUID } from "crypto";




const dataFilePath = path.join(process.cwd(), 'src/app/db/products.json');


export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const jsonData = await readFile(dataFilePath);
    const data: Product[] = JSON.parse(jsonData.toString());
    let singleData = data.filter( item => item.id === params.id)
    
    return new NextResponse(JSON.stringify({ message: "Data fetched successfully", data: singleData[0]}), {
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




export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
 /*  const id = params.id;
  let json = await request.json();
 */
  try {
    const jsonData = await readFile(dataFilePath);
    const data: Product[] = JSON.parse(jsonData.toString());
    let newData: Product = await request.json(); 
    
    data.forEach( (product, index) =>{
      if(product.id === params.id){
        data[index] = {...product, ...newData}
        console.log(data);
      }
    })
    const updatedData = JSON.stringify(data);
    await writeFile(dataFilePath, updatedData);

    return new NextResponse(JSON.stringify({ message: "Data updated successfully", data: null}), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }); 

  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const jsonData = await readFile(dataFilePath);
    const data: Product[] = JSON.parse(jsonData.toString());
    let filteredData = data.filter( item => item.id !== params.id)

    const updatedData = JSON.stringify(filteredData);
    await writeFile(dataFilePath, updatedData);
    
    return new NextResponse(JSON.stringify({ message: "Data deleted successfully", data: null}), {
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