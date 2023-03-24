import React from "react";
import Choices from "./Choices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Element from "./Element";
import {motion} from "framer-motion"
import GamePlayed from "./GamePlayed";

type Props = {};

const Game = (props: Props) => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);

  return (
    <div className="mt-16">
      {game.playing ? (
       <GamePlayed/>
      ) : (
        <Choices />
      )}
    </div>
  );
};

export default Game;
