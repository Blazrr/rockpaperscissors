import React from 'react'
import Element from './Element'

type Props = {}

const Choices = (props: Props) => {
  return (
    <div className='flex  mt-16 items-center justify-center flex-col px-8'>
      <div className='flex space-x-8'>
        <Element element='rock' />
        <Element element='paper'/>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        <Element element='scissors' />
      </div>
    </div>
  )
}

export default Choices