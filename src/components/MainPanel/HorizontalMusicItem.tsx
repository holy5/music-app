import React, { FC, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

interface HorizontalMusicItemProps {
  width?: string;
  marquee?: boolean;
}

const StyledMarquee = styled(Marquee)<{ activeAnimation?: boolean }>`
  .marquee {
    animation: ${(props) => (props.activeAnimation ? "" : "none")};
    margin-right: 5px;
  }
`;

const HorizontalMusicItem: FC<HorizontalMusicItemProps> = ({
  width,
  marquee = false,
}) => {
  const [play, setPlay] = useState(false);
  const title = `all i want for christmas is linh`;

  return (
    <div className="flex flex-row items-center justify-between cursor-pointer">
      <div
        onMouseEnter={() => {
          setPlay(true);
        }}
        onMouseLeave={() => {
          setPlay(false);
        }}
        className="flex items-center gap-x-3"
      >
        <div>1</div>
        <img
          src="https://i.pinimg.com/originals/f1/6f/ed/f16fedc86686146624897737cf4338d8.jpg"
          alt=""
          className="aspect-square w-[50px] rounded-md"
        />
        <div className={`flex flex-col overflow-hidden`}>
          {marquee ? (
            <StyledMarquee
              gradient={false}
              style={{ width: `${width}px` }}
              play={play}
              speed={30}
              className="truncate"
              activeAnimation={play}
            >
              {title}
            </StyledMarquee>
          ) : (
            <div className="truncate">{title}</div>
          )}
          <div className="text-dimwhite">Maria Caray</div>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-3">
        <div>3:69</div>
        <FiHeart className="text-xl" />
        <AiOutlinePlus className="text-xl" />
      </div>
    </div>
  );
};

export default HorizontalMusicItem;
