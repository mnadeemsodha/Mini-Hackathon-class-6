import Link from 'next/link'
import React from 'react'

const Featuredcars = () => {
  return (
    
      <div className="bg-gray-100 justify-items ">
  <div className="max-w-5xl mx-auto px-4">

    
    <div className="flex justify-between justify-items-start">
      <h2 className="text-2xl font-semibold">Featured New Cars</h2>
      
    </div>

    
    <div className="mt-4 flex space-x-6 text-gray-500 text-sm">
      <span className="text-blue-600 font-medium border-b-2 border-blue-600">Popular</span>
      <span>Upcoming</span>
      <span>Newly Launched</span>
    </div>


    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  <Link href="/Toyota">
      <div className="bg-white p-4 rounded-lg shadow-md">
        
        <img src="/corolla6.png" alt="Toyota Corolla" className="w-full h-40 object-cover" />
        <h3 className="mt-2 text-lg font-medium">Toyota Corolla</h3>
        <p className="text-green-600 text-sm">PKR 59.7 - 75.5 lacs</p>
        <p className="text-orange-500 text-sm flex items-center">
          ★★★☆☆ <span className="ml-2 text-gray-600">621 Reviews</span>    
               
        </p>
        </div>
  </Link>
        

      <Link href="/Suzuki">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src="Alto.jpg" alt="Suzuki Alto" className="w-full h-40 object-cover" />
        <h3 className="mt-2 text-lg font-medium">Suzuki Alto</h3>
        <p className="text-green-600 text-sm">PKR 23.3 - 30.5 lacs</p>
        <p className="text-orange-500 text-sm flex items-center">
          ★★★☆☆ <span className="ml-2 text-gray-600">199 Reviews</span>
        </p>
      </div>
      </Link>

      <Link href="/Hondacity">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src="City.jpg" alt="Honda City" className="w-full h-40 object-cover" />
        <h3 className="mt-2 text-lg font-medium">Honda City</h3>
        <p className="text-green-600 text-sm">PKR 46.5 - 58.5 lacs</p>
        <p className="text-orange-500 text-sm flex items-center">
          ★★★☆☆ <span className="ml-2 text-gray-600">458 Reviews</span>
        </p>
      </div>
      </Link>
      
      <Link href="/Hondacivic">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src="Civic.jpg" alt="Honda Civic" className="w-full h-40 object-cover" />
        <h3 className="mt-2 text-lg font-medium">Honda Civic</h3>
        <p className="text-green-600 text-sm">PKR 86.6 - 99.0 lacs</p>
        <p className="text-orange-500 text-sm flex items-center">
          ★★★☆☆ <span className="ml-2 text-gray-600">357 Reviews</span>
        </p>
      </div>
      </Link>
    </div>
  </div>
</div>
  

)


}
export default Featuredcars