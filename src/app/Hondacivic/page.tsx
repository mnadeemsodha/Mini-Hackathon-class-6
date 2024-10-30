import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Hondacivic = () => {
  return (
    <>  
    <div className='text-xl font-semibold text-center'>
      <h1>Honda Civic  2024 Price in Pakistan, Images, Reviews & Specs</h1>
       </div>
      <div className='flex justify-center py-2 bg-white'>
        <Image src="Civic.jpg" alt="logo" />
      </div>
<div className='flex justify-center'>
  <button>
    <ul className='flex space-x-2 '> 
      
      
      <li className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Book a test drive</li>
      <li className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Request bank finance</li>
      <li className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Visit place</li>
      <li className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Car inspection</li>
    </ul>
  </button>
</div>
<div className='flex justify-center py-3'>
  <h1 className='font-bold text-xl'>Vehicle Description</h1>
</div>
<div className='flex justify-center space-x-2'>
  

  <p className=' text-lg font-bold'>Number of Doors</p>
  <p className='text-lg font-thin'>4</p>
  <p className=' text-lg font-bold'>Engine</p>
  <p className='text-lg font-thin'>1500CC</p>
  <p className=' text-lg font-bold'>Condition</p>
  <p className='text-lg font-thin'>8/10</p>
  <p className=' text-lg font-bold'>Driven</p>
  <p className='text-lg font-thin'>15,000 KM</p>
  <p className=' text-lg font-bold'>Suspension:</p>
  <p className='text-lg font-thin'>Soft suspension</p>
  </div>
  <div className='flex justify-center space-x-2'>
  <p className=' text-lg font-bold'>AVG</p>
  <p className='text-lg font-thin'>12.5 Km per ltr</p>
  <p className=' text-lg font-bold'>Transmission:</p>
  <p className='text-lg font-thin'>Automatic</p>
  <p className=' text-lg font-bold'>Fuel Type:</p>
  <p className='text-lg font-thin'>Petrol</p>
</div>
<div className='flex justify-center py-4 text-green-400 text-3xl font-semibold'>
  <h1>
    PKR 98,99,000
  </h1>
</div>
<Link href="/Payment">
<div className='flex justify-center py-2'>
<button className='bg-blue-600 text-white px-4 py-2 rounded-lg items-center'>Make Payment</button>  
</div>
 </Link>
</>  
)


}

export default Hondacivic
