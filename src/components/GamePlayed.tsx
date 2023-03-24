import React from "react";
import Element from "./Element";
import { motion } from "framer-motion";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../../Reducers/gameSlice";

type Props = {};

const GamePlayed = (props: Props) => {
  const game = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch()
    const reset = () => {
        dispatch(playAgain())
    }
  return (
    <>
      <div className="flex space-x-8 items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.6 }}
        >
          <Element element={game.element} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 2 }}
        >
          <Element element={game.randomElement} />
        </motion.div>
      </div>

      <motion.button className="bg-white text-[#3b4363] flex mx-auto mt-8 px-8 py-4 tracking-widest font-bold rounded-xl" onClick={reset}
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ ease: "easeIn", duration: 0.8, delay: 2 }}>PLAY AGAIN</motion.button>
    </>
  );
};

export default GamePlayed;
