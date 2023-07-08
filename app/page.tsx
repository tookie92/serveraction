import { addProductstoDatabase } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";
import { Products } from "@/typing";
import { revalidateTag } from "next/cache";



export default async function Home() {
  const res = await fetch("https://64a874b1dca581464b85c266.mockapi.io/products",
  {
    cache:"no-cache",
    next:{
      tags:["products"]
    }
  }
  );

  const products : Products[] = await res.json()
  
  return (
    <main className="">
      <h1 className='text-3xl font-bold text-center'>Products warehouse</h1>

      <AddProductButton/>

      <form className='flex flex-col gap-5 max-w-xl mx-auto p-5' action={addProductstoDatabase}>
        <input name="product" placeholder='Enter a name' className='border border-gray-300 p-2 rounded-md' />
        <input name="price" placeholder='Enter a price' className='border border-gray-300 p-2 rounded-md' />
        <button>Add a Product</button>
      </form>

      <h1>List of products</h1>
      <div className="flex flex-wrap gap-5">
        {products.map((product)=>{
         return <div key={product.id} className="p-5 shadow">
          <p>{product.product}</p>
          <p>{product.price} Euro</p>
         </div>
        })}
      </div>
    </main>
  )
}
