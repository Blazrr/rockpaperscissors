import Image from 'next/image'
import React, { useState } from 'react'
import {motion, AnimatePresence} from "framer-motion"

type Props = {}

const Rules = (props: Props) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <>
    <div className='fixed bottom-8 -translate-x-1/2 left-1/2 transform border-2 border-white py-2 px-6 tracking-widest rounded-xl cursor-pointer hover:scale-110 transition-all' onClick={() => setIsShown(true)}>Rules</div>
    <AnimatePresence>
    {
      isShown &&
    <motion.div className='bg-white h-full w-full absolute top-0 left-0'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>

       <Image src="/images/icon-close.svg"
      alt='rule image' width={24} height={24} className='cursor-pointer absolute top-8 left-8 hover:scale-110 transition-all 'onClick={() => setIsShown(false)} />
      <p className='tracking-wider text-[#3b4363] text-center text-4xl font-bolds mt-32'>RULES</p>
      <Image src="/images/image-rules.svg"
      alt='rule image' width={400} height={400} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform' />
    </motion.div>
    }
    </AnimatePresence>
    </>
  )
}

export default Rules