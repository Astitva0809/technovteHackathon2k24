import React from 'react'
// import Card from './card';
import logo from "../assets/icons8-price-30.png"
import logo1 from "../assets/icons8-area-chart-30.png"

function Tenantcard() {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex max-w-6xl flex-col items-center rounded-md border  border-black md:flex-row bg-white"> {/* Increased width */}
        <div className="h-full w-full md:h-[300px] md:w-[450px]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          
        <div className="p-4">
        <h1 className="inline-flex items-center text-6x1 font-semibold">
        <p style={{ fontSize: '1.5rem' }}>₹10000</p>
            </h1>
        </div>
         
          <div className="p-4">
       
            <h2 className="inline-flex items-center text-lg font-semibold">
              Residential Plot
            </h2>
            <div className="bg-gray-200 p-3 rounded-md mt-4 max-w-20xl">

              <div className="flex space-x-4">
              
              <p className="flex items-center whitespace-nowrap"><img src={logo1} alt="" /><strong>Plot Area:</strong>&nbsp;500 sq. ft.</p>
              <p className="flex items-center whitespace-nowrap"><img src={logo} alt="" /><strong> Average Price:</strong>&nbsp;$100,000</p>

              <p className="flex items-center whitespace-nowrap"><img src={logo} alt="" /><strong>Price:</strong>&nbsp;$120,000</p>


            
               
              </div>
            </div>
            <div className="mt-4">
              <p>Address :</p>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <div className="mt-4">Lorem ipsum dolor sit amet.</div>
              <button className="rounded-lg bg-blue-500 px-3 py-2.5 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200">
                View AR
              </button>
              <button className="rounded-lg bg-blue-500 px-6 py-2.5 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Tenantcard
