import React, { useEffect, useState } from "react";
import Element from "./Element";
import { motion } from "framer-motion";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../../Reducers/gameSlice";

type Props = {};

const GamePlayed = (props: Props) => {
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [isShown, setIsShown] = useState(false);
  const reset = () => {
    dispatch(playAgain());
  };

  useEffect(() => {
    setText(game.lastResult);
    if (game.playing) {
      setTimeout(() => {
        setIsShown(true);
      }, 2000);
    } else {
      setIsShown(false);
    }
  }, [game.playing]);
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

        <div className="relative h-[200px] w-[200px] rounded-full bg-slate-400">
          {isShown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform h-full w-full"
            >
              <Element element={game.randomElement} />
            </motion.div>
          )}
        </div>
      </div>
      <div></div>
      {isShown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="text-5xl text-center">{text}</h1>

          <button
            className="bg-white text-[#3b4363] flex mx-auto mt-8 px-8 py-4 tracking-widest font-bold rounded-xl hover:scale-110 transition-all"
            onClick={reset} 
          >
            PLAY AGAIN
          </button>
        </motion.div>
      )}
    </>
  );
};

export default GamePlayed;
