import React, { useState } from 'react'
import ProjectItem from './atom/ProjectItem'
import wonderfuljogja from '../assets/wonderfuljogja_artactivities.png'
import minimalsite from '../assets/minimalskincare.png'
import simpleredux from '../assets/simpleredux_0.png'
import simulationvr from '../assets/simulation_vr.png'
import experience_travel from '../assets/travel_web.png'



function Projects() {
  
  const [projectExperience, setProjectExperience] = useState([])
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{

  //     } catch(error){

  //     }
  //   }


  // }, [])
  
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-14'>
      <h1 className='text-4xl font-bold text-center '>Project</h1>
      
      <div className='grid grid-cols-2 gap-12 mt-10'>
        <ProjectItem img={wonderfuljogja} title='Wonderful Jogja' githubLink={"https://github.com/nadila98dev/HSC_FinalProjects_Jogja"} url={"https://jogja-istemewa.vercel.app/things-to-do/art-activities-jogja"}/>
        <ProjectItem img={simulationvr} title='Public Speaking Smulation Virtual Reality' githubLink={"https://github.com/nadila98dev/SimulasiPS"}/>
        <ProjectItem img={minimalsite} title='Clone Minimal Skin Care' githubLink={"https://github.com/nadila98dev/MinimalSite"} url={"https://clone-minimal-site-jrzcc1xuj-nadilas-projects.vercel.app/"} />
        <ProjectItem img={simpleredux} title='Simple CRUD using Redux' githubLink={"https://github.com/nadila98dev/Basic_CRUD_Redux"}/>
        <ProjectItem img={experience_travel} title='Experience Travel Booking' githubLink={"https://github.com/nadila98dev/react-tailwind-experiences/tree/customize"} url={"https://react-travel-experience.vercel.app/"} />
      </div>
      
    </div>
  )
}

export default Projects