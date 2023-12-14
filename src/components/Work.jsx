import React, { useEffect, useState } from 'react'
import WorkItem from './atom/WorkItem'


function Work() {

  const [workExperience, setWorkExperience] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('/db.json')
        const data = await response.json()
        setWorkExperience(data.work_experience)
      } catch(err) {
        console.error('Error fetching work experience data:', err)

      }
    }

    fetchData()
  }, [])
  

  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-14'>
      <h1 className='text-4xl font-bold text-center '>Work</h1>
      {workExperience.map((experience, index) => (
        <WorkItem
        key={index}
        company={experience.company}
        position={experience.position}
        year={experience.year}
        description={experience.description}
        />
      ))}
    </div>
  )
}

export default Work