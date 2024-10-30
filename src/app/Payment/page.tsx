import Link from "next/link"
export default function Payment(){
    return(
        <div>
            <h1 className="text-5xl font-semibold text-center uppercase ">
                enter your details
            </h1>

            <div className="space-y-0">
            
            <form className="mt-10 flex gap-3 justify-center items-center flex-col border">
                <input type="text"  className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Name" />

                <input type="number" className="p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Contact Number" />

                <input type="text" className="p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Address" />

                <input type="number" className="p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Card Number" />

                <input type="number" className="p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your CVV" />

               <div className="py-3">
                <Link href="/Thankyou">
                <button className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Place your order</button>
           </Link>
           </div>
            
            </form>
            </div>
            
        
        </div>
    )
}