import React from 'react'
import Element from './Element'

type Props = {}

const Choices = (props: Props) => {
  return (
    <div className='flex space-x-8 mt-16 items-center justify-center'>
        <Element element='rock' />
        <Element element='paper'/>
        <Element element='scissors' />
    </div>
  )
}

export default Choices