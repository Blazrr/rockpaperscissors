import Image from "next/image";
import React from "react";
import { Elements } from "../../public/data/Elements";
import {useSelector, useDispatch} from "react-redux"
import { RootState } from "../../store";
import { elementChosen } from "../../Reducers/gameSlice";

type Props = {
  element: "rock" | "paper" | "scissors"
};

const Element = ({ element }: Props) => {
  let currElement = element ;
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch()

    const elementChosed = () => {
      if (!game.playing) {
        dispatch(elementChosen(element))
      }
    }
  return (
    <div className="">
      <Image
        style={{
          borderColor: Elements[currElement].color,
        }}
        src={Elements[currElement].bg}
        width={200}
        height={200}
        alt="Rock"
        className="bg-white rounded-full p-8 aspect-square border-[14px]  hover:scale-105 transition-all cursor-pointer"
        onClick={elementChosed}
      />
    </div>
  );
};

export default Element;
