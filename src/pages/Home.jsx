import { Route, Routes } from "react-router-dom";
import { Relaxing } from "../pages";
import { useEffect, useRef, useState } from "react";
import audioRelaxing from "../audio/relaxing.mp3";
import audioInspiration from "../audio/inspiration.mp3";
import useSound from "use-sound";

const Home = () => {
  const [theme, setTheme] = useState(false);
  const [start, setStart] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [playAudio1, { stop: stopAudio1 }] = useSound(audioRelaxing);
  const [playAudio2, { stop: stopAudio2 }] = useSound(audioInspiration);


  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Thực hiện nút welcome để vào trang website
  const ClickWelcome = async () => {
    setWelcome(true);
    await delay(2000);
  };

  return (
    <div
      className={`w-screen h-screen 
        bg-gradient-to-r 
        from-[#55a14891] via-[#48AB8C] to-[#3cb3cec2]
        flex justify-center items-center text-white font-['Just_Another_Hand']
        font-medium text-[80px]
        `}
    >
      <div
        className={`
            ${!welcome && "opacity-0   "} 
            ${
              welcome &&
              "opacity-100 transition duration-1000 fade-in flex flex-row gap-[170px]"
            }
            cursor-pointer
        `}
      >
        <a
          href="/relaxing"
          className="hover:text-transparent  transition duration-700 fade-in-right
                bg-clip-text bg-gradient-to-r 
                from-[#157540] via-[#0a6e59] to-[#2182afe7]"
          onMouseOver={() => playAudio1()}
          onMouseLeave={() => stopAudio1()}
        >
          Relaxing
        </a>
        <a
          href="/inspiration"
          className="transition duration-500 fade-in-right
                       hover:text-transparent bg-clip-text bg-gradient-to-r 
                     from-[#157540] via-[#0a6e59] to-[#2182afe7]"
          onMouseOver={() => playAudio2()}
          onMouseLeave={() => stopAudio2()}
        >
          Inspiration
        </a>
      </div>

      <div
        className={`
        absolute
          ${welcome && "transition duration-1000 fade-out text-transparent "} 
        cursor-pointer
         `}
        onClick={ClickWelcome}
      >
        Welcome
      </div>
    </div>
  );
};

export default Home;
