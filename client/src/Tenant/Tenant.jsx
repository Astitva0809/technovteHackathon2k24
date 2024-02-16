import React from 'react'
import img from '../assets/Tenantbg.jpeg'
import search from '../assets/search.png'
function Tenant() {
    return (
        <>
            <div className=' flex flex-col bg-tertiary '>
                <div className='flex ' >
                    <div className='w-[8%] bg-tertiary ' ></div>
                    <img className=' w-[92%]  bg-tertiary  rounded-bl-[5vw]  ' src={img} alt="" />
                </div>
                <div className="absolute top-[50vh] left-[20vw]  h-[8vh] w-[50vw] rounded-full bg-gray-400  border-[2px] flex items-cente border-black ">
                    <div className="  bg-gray-300 w-[4vw]  rounded-full p-[10px] border border-black  ">
                        <img className=' ' src={search} alt="" /></div>
                    <input
                        type="text"
                        className=" w-[45vw] bg-transparent m-1 mr-5  pl-[5vw] "
                        placeholder=' Search...'
                    />
                </div>

            </div>

            <div className='h-[30vh] bg-tertiary '  >

            </div>
        </>
    )
}

export default Tenant
