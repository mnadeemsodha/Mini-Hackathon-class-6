
const HomePage = () => {
  return (
    <>
      
      <main className="flex flex-col justify-center items-center bg-gray-100 ">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>
        
        <div className="flex items-center border border-gray-200 rounded-lg bg-white p-4 space-x-4 w-2/3">
          
          {/* Left Box */}
          <div className="flex flex-col justify-items-start w-2/3 space-y-6 text-left text-lg">
            <h2 className="text-xl font-semibold text-blue-900">Post your Ad on PakWheels</h2>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>✔️ Post your Ad for Free in 3 Easy Steps</li>
              <li>✔️ Get Genuine offers from Verified Buyers</li>
              <li>✔️ Sell your car Fast at the Best Price</li>
            </ul>
            <button className=" px-2 py-2 bg-red-600 text-white rounded-lg">
              Post Your Ad
            </button>
          </div>

          {/* Divider */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400 font-semibold text-xl">OR</span>
            <div className="w-px h-full bg-gray-200"></div>
          </div>

          {/* Right Box */}
          <div className="flex flex-col justify-items-start w-2/3 space-y-6 text-left text-lg ">
            <h2 className="text-xl font-semibold text-blue-900">Try PakWheels Sell It For Me</h2>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>✔️ Dedicated Sales Expert to Sell your Car</li>
              <li>✔️ We Bargain for you and share Best Offers</li>
              <li>✔️ We ensure Safe & Secure Transaction</li>
            </ul>
            <button className=" px-2 py-2 bg-blue-600 text-white rounded-lg">
              Register Your Car
            </button>
          </div>         
        </div>
      </main>
    </>
  )
}

export default HomePage
