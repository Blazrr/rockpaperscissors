import React from 'react'
import {useSelector} from "react-redux"
import { RootState } from '../../store';

type Props = {}

const Counter = (props: Props) => {
  const game = useSelector((state: RootState) => state.game);

  return (
    <div className='flex items-center justify-center mt-8'>

        <div className='border-4 border-slate-300 p-3 rounded-xl flex items-center justify-between min-w-[300px]'>
    
            <ul>
                <li>ROCK</li>
                <li>PAPER</li>
                <li>SCISSORS</li>
            </ul>

            <div className='bg-white flex flex-col justify-center rounded-lg p-4 items-center text-[#3b4363]'>
                <span className='tracking-widest '>SCORE</span>
                <span className='font- text-4xl'>{game.score}</span>
            </div>
 
        </div>
        

    </div>
  )
}

export default Counter