'use server'

import { Products } from "@/typing";
import { revalidateTag } from "next/cache";


export const addProductstoDatabase= async(e: FormData)=>{
    'use server'
    const product  = e.get("product")?.toString()
    const price  = e.get("price")?.toString()

    if(!price || !product) return;

    const newProduct : Products = {
      product,
      price
    }

    await fetch("https://64a874b1dca581464b85c266.mockapi.io/products",{
      method: "POST",
      body:JSON.stringify(newProduct),
      headers:{
        "Content-Type": "application/json"
      }
    })
    revalidateTag("products")
  }