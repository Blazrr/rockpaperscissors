import React from "react";
import Choices from "./Choices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Element from "./Element";
import {motion} from "framer-motion"

type Props = {};

const Game = (props: Props) => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);

  return (
    <div className="mt-16">
      {game.playing ? (
        <div className="flex space-x-8 items-center justify-center">
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{ease:"easeIn", duration:.6}}

            >
          <Element element={game.element} />
            </motion.div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{ease:"easeIn", duration:.8, delay:2}}
            >
          <Element element={game.randomElement} />
            </motion.div>
        </div>
      ) : (
        <Choices />
      )}
    </div>
  );
};

export default Game;
