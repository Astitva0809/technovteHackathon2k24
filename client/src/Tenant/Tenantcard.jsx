import React from 'react'
// import Card from './card';
import logo from "../assets/icons8-price-30.png"
import logo1 from "../assets/icons8-area-chart-30.png"

function Tenantcard() {
  return (
<div className="container mx-auto mt-8">
  <div className="flex flex-col items-start justify-start rounded-md border border-black bg-white p-4 md:flex-row lg:max-w-6xl">
  <div className="w-full md:max-w-full lg:max-w-[450px] h-auto md:h-[300px]">
  <img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    alt="Laptop"
    className="w-full h-full rounded-md object-cover"
  />
</div>

    <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
      <div className="p-4">
        <h1 className="text-3xl md:text-6xl font-semibold">
          <p style={{ fontSize: '1.5rem' }}>₹10000</p>
        </h1>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">
          Residential Plot
        </h2>
        <div className="bg-gray-200 p-3 rounded-md mt-4 w-full">
  <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
    <div className="flex items-center">
      <img src={logo1} alt="" />
      <strong className="md:ml-2">Plot Area:</strong>&nbsp;500 sq. ft.
    </div>
    <div className="flex items-center">
      <img src={logo} alt="" />
      <strong className="md:ml-2">Average Price:</strong>&nbsp;$100,000
    </div>
    <div className="flex items-center">
      <img src={logo} alt="" />
      <strong className="md:ml-2">Price:</strong>&nbsp;$120,000
    </div>
  </div>
</div>

        <div className="mt-4">
          <p>Address :</p>
        </div>
        <div className="mt-3 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5">
          <div className="mt-4 md:mt-0">Lorem ipsum dolor sit amet.</div>
          <div className="flex items-center space-x-4 md:space-x-2">
          <button className="rounded-lg bg-blue-500 px-2 py-1.5 md:px-3 md:py-2.5 text-base md:text-sm font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 md:w-auto">
  View AR
</button>
<button className="rounded-lg bg-blue-500 px-3 py-1.5 md:px-6 md:py-2.5 text-base md:text-sm font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 md:w-auto">
  Buy
</button>

</div>

        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Tenantcard
