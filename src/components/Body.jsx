import { Route, Routes } from "react-router-dom";
import { Home, About } from "../pages";

const Body = () => {

    return(
        <div className="w-full h-full px-10 text-black bg-slate-200 flex flex-col mt-20">
            <Routes>
                <Route path="/" exc element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </div>
    );
};

export default Body;