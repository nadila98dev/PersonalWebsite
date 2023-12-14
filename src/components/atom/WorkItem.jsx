import React from 'react'

const WorkItem = ({company, position, year, description}) => {
  return (
    <ol className='flex flex-col relative border-1 border-stone-200'>
        <li className='mb-10 m-4 space-y-4'>
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-slate-900'>{year}</span>
            <span>{position}</span>
          </p>
          <p>{company}</p>
          <p>{description}</p>
        </li>
        
        
    </ol>
  )
}

export default WorkItem