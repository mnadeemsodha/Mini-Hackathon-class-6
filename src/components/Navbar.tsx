"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-600 h-20 py-2 px-3 flex justify-between items-center text-white' >
        <div>
        <Image src="/logo4.png" alt="logo"  
        className='w-30 h-20'  
        
        />
            <h1 className='text-2xl font-bold'>
                </h1>
               
        </div>
        <div>
            <ul className='flex space-x-5'>
            <li><Link href='#'>Used Cars</Link></li>
            <li><Link href='/#'>New Cars</Link></li>
            <li><Link href='/#'>Bikes</Link></li>
            <li><Link href='/#'>Autostore</Link></li>
            <li><Link href='/#'>Videos</Link></li>
            <li><Link href='/#'>Forums</Link></li>
            <li><Link href='/#'>Blogs</Link></li>
            <li><Link href='/#'>More</Link></li>
            </ul>
            </div>

        <div>
            <ul className='flex space-x-5'>
            <li><Link href='#'>Singin</Link></li>
            <li><Link href='#'>Singup</Link></li>
            <li>
                <button className='bg-red-500 px-4 py-2 rounded-md'>Post an Ad</button>
            </li>
                
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
