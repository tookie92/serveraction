'use client'

import { addProductstoDatabase } from "@/actions/serverActions"
import { useTransition } from "react"

function AddProductButton() {
    const [isPending, setTransition]= useTransition()
    const formData = new FormData;
    formData.append("product", "tandarma")
    formData.append("price", "200")

  return (
    <button
        className=" fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
        onClick={()=>setTransition(()=>addProductstoDatabase(formData))}
     >{isPending? "Adding ...": "Add a macbook pro"}</button>
  )
}

export default AddProductButton