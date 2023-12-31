import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Slider } from "@mui/material";
import audioRelaxing from "../audio/relaxing.mp3";
import React, { useState } from "react";
import useSound from "use-sound";


const Control = () => {
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);
  const [playAudio1, { stop: stopAudio1 }] = useSound(audioRelaxing);
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className=" w-full flex h-full items-center flex-col">
        <span className="text-[#ececec]  font-['Just_Another_Hand'] text-[25px]">
          Music name
        </span>
        <Slider
          size="medium"
          valueLabelDisplay="auto"
          aria-label="custom thumb label"
          defaultValue={20}
          sx={{color:'#fff'}}

        />
        <div className="w-full flex justify-between items-center">
          <span className="text-[13px] font-['Inter'] text-[#eeeeeee5] ">0:20</span>
          <span className="text-[13px] font-['Inter'] text-[#eeeeeee5] ">5:12</span>
        </div>
      </div>
      <div className="border-2 rounded-md border-gray-300 px-5 text-base py-5 flex gap-5 justify-center items-center text-white">
        <div className="bg-[#E7E7E7] bg-opacity-[35%] hover:bg-opacity-[80%]  rounded-full w-fit h-fit flex justify-center items-center cursor-pointer">
          <SkipPreviousIcon sx={{ fontSize: "3em" }} />
        </div>
        <div className="bg-[#18A80B] bg-opacity-[35%] hover:bg-opacity-[80%]  rounded-full w-fit h-fit flex justify-center items-center cursor-pointer ">
          <PlayArrowIcon sx={{ fontSize: "3em" }} />
        </div>
        <div className="bg-[#D11E1E] bg-opacity-[35%] hover:bg-opacity-[80%] rounded-full w-fit h-fit flex justify-center items-center cursor-pointer ">
          <StopIcon sx={{ fontSize: "3em" }} />
        </div>
        <div className="bg-[#E7E7E7] bg-opacity-[35%] hover:bg-opacity-[80%]  rounded-full w-fit h-fit flex justify-center items-center cursor-pointer ">
          <SkipNextIcon sx={{ fontSize: "3em" }} />
        </div>
      </div>
    </div>
  );
};

export default Control;
