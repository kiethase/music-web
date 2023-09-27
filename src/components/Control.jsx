import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Divider } from '@mui/material';


const Control = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div
        className="bg-orange-400 w-full h-2"
      ></div>
        <Divider></Divider>
      <div 
        className="border-2 rounded-md border-gray-300 px-5 text-base py-5 flex gap-5 justify-center items-center text-white"
      >
        <div
            className="bg-[#E7E7E7] bg-opacity-[35%] hover:bg-opacity-[80%]  rounded-full w-fit h-fit flex justify-center items-center cursor-pointer"
        >
            <SkipPreviousIcon sx={{fontSize: "3em"}}/>
        </div>
        <div
            className="bg-[#18A80B] bg-opacity-[35%] hover:bg-opacity-[80%]  rounded-full w-fit h-fit flex justify-center items-center cursor-pointer "
        >
            <PlayArrowIcon sx={{fontSize: "3em"}}/>
        </div>
        <div
            className="bg-[#D11E1E] bg-opacity-[35%] hover:bg-opacity-[80%] rounded-full w-fit h-fit flex justify-center items-center cursor-pointer "
        >
            <StopIcon sx={{fontSize: "3em"}}/>
        </div>
        <div
            className="bg-[#E7E7E7] bg-opacity-[35%] hover:bg-opacity-[80%]  rounded-full w-fit h-fit flex justify-center items-center cursor-pointer "
        >
            <SkipNextIcon sx={{fontSize: "3em"}}/>
        </div>
      </div>
    </div>
  );
};

export default Control;
