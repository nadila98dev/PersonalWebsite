import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { GrProjects, GrContactInfo } from "react-icons/gr";

function Sidenav() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[90] md:hidden' />
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 '>
                    <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </a>
                    <a href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a href="#Resume" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineUser size={20} />
                        <span className='pl-4'>Resume</span>
                    </a>
                    <a href="#email" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrContactInfo size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
                
            )
            : (
                ""
            )
        }
    </div>
  )
}

export default Sidenav