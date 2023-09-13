import { Route, Routes } from "react-router-dom";
import { Relaxing } from "../pages";
import { useState } from "react";

const Body = () => {
    const [theme, setTheme] = useState(false);

    return(
        <div className="w-screen h-screen 
        bg-gradient-to-r 
        from-[#55a14891] via-[#48AB8C] to-[#3cb3cec2]
        
        text-white  font-['Just_Another_Hand']">
                <a href="/relaxing">Relaxing</a>
          
        </div>
    );
};

export default Body;