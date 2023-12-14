import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'


function Hero() {
  return (
    <div id='main_hero'>
        <img className='w-full h-screen object-cover object-left' src="public/watugupit.jpg" alt="" />
        <div className='w-full h-screen absolute top-0 bg-white/40'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Nadila Rizky Putri</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4  text-gray-900'>
                    I'm a
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Coder',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            2000,
                            'Mobile Developer',
                            2000,
                            'Tech Enthusiast',
                            2000,
                            'Traveler',
                            2000,
                            'Freelance Tour Guide',
                            2000
                        ]}
                        wrapper="div"
                        cursor={true}
                        speed={50}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        repeat={Infinity}
                    />
                </h2>
                <div className='flex sm:justify-start justify-center space-x-10 pt-6 max-w[200px] w-full'>
                <a href="https://www.linkedin.com/in/nadila-rizky-p-b2180016b/" target="_blank" rel="noopener noreferrer">                        
                <FaLinkedin className='cursor-pointer' size={30} />
                </a>
                {/* <a href="https://www.linkedin.com/in/nadila-rizky-p-b2180016b/" target="_blank" rel="noopener noreferrer">                        
                <FaInstagram className='cursor-pointer' size={30}/>

                </a> */}
                <a href="https://github.com/nadila98dev" target="_blank" rel="noopener noreferrer">                        
                <FaGithub className='cursor-pointer' size={30}/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero