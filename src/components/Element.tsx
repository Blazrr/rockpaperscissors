import Image from "next/image";
import React from "react";
import { Elements } from "../../public/data/Elements";

type Props = {};

const Element = (props: Props) => {
    console.log(Elements)

    let currElement:"rock"|"paper"|"scissors" = "scissors"
  return (
    <div>
      <Image
        style={{
            borderColor:Elements[currElement].color
        }}
        src={Elements[currElement].bg}
        width={200}
        height={200}
        alt="Rock"
        className="bg-white rounded-full p-8 aspect-square border-[14px] "
      />
    </div>
  );
};

export default Element;
