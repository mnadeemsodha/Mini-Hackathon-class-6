import React from 'react'
import Hero from '../components/Hero'
import Featuredcars from '../components/Featuredcars'

const Home = () => {
  return (
    <div className='space-y-2 bg-gray-100' >
    <div className='py-5' >     
     <Hero/>
     </div>
     <div className='py-10'  >
     <Featuredcars />
      </div>
      </div>
  )

}

export default Home
