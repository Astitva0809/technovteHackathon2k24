import React, { useState } from 'react';
import Hamburger from "../assets/Hamburger.png";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='bg-transparent bg-primary sticky top-2 backdrop-blur-lg backdrop-brightness-75 z-50  mx-auto w-[95vw] rounded-xl'>
            <div className='h-[10vh] w-[95vw] mx-auto flex justify-between items-center p-4 font-playfair text-[17px]'>
                <div><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc57725c-8ab0-43ad-a8c1-24eb43956f47?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8" alt="Logo" /></div>
                <div className='md:flex h-[10vh] justify-center items-center gap-12 hidden'>
                    <div className='hover:scale-110'><a href="/">Home</a></div>
                    <div className='hover:scale-110'><a href="/">For Tenants</a></div>
                    <div className='hover:scale-110'><a href="/">For Owners</a></div>
                    <div className='border-[1px] border-black py-2 px-4 rounded-lg hover:scale-110'><button><a href="/">Login</a></button></div>
                    <div className='border-[1px] bg-black px-3 py-2 text-white rounded-lg hover:scale-110'><button><a href="/">SignUp</a></button></div>
                </div>
                <div className='md:hidden '><button onClick={handleClick} className='text-white rounded-[50%]'><img className='h-[36px] w-[36px]' src={Hamburger} alt="Menu" /></button></div>
            </div>
            {showMenu && (
                <div className='h-[88vh] w-[100vw] md:hidden font-playfair pt-8  text-[17px]'>
                    <div className='flex flex-col  gap-[30px] text-start px-4'>
                        <div>
                            <a href="/" className=' hover:scale-110'>Home</a>
                            <hr className='border-gray-600 mt-2' />
                        </div>
                        <div>
                            <a href="/" className=' hover:scale-110'>For Tenants</a>
                            <hr className='border-gray-600 mt-2' />
                        </div>
                        <div>
                            <a href="/" className=' hover:scale-110'>For owners</a>
                            <hr className='border-gray-600 mt-2' />
                        </div>
                        <div className='flex justify-center gap-4 mt-2'><button className='border-[1px] border-black py-2 px-3 rounded-lg hover:scale-110'><a href="/" >Login</a></button>
                            <button className='border-[1px] bg-black px-3 py-2 text-white rounded-lg hover:scale-110'><a href="/" >SignUp</a></button></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
