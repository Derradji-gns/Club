import "tailwindcss";
import { useState } from "react";
import test1 from "./assets/1.jpg";
import test2 from "./assets/2.jpg";
import test3 from "./assets/3.jpg";


function Projects() {
    const [imgSrc, setImgSrc] = useState(null);

    const handelClick1 = () =>{
        setImgSrc(test1)

    }

    const handelClick2 = () =>{
        setImgSrc(test2)

    }

    const handelClick3 = () =>{
        setImgSrc(test3)

    }
  return (
<div className="bg-gray-900 w-screen h-150 flex justify-center items-center">
    <div className="  w-full h-150 ">
         <h1 className="font-bold text-white text-2xl text-center p-10">IGENERGY Has Great Projects in Electronics</h1> 
        <div className="flex justify-center gap-5">
           <button onClick={handelClick1} className="w-25 h-9 border-2 rounded-2xl bg-gray-600 text-white">Project1</button>
           <button onClick={handelClick2} className="w-25 h-9 border-2 rounded-2xl bg-gray-600 text-white">Project2</button>
           <button onClick={handelClick3} className="w-25 h-9 border-2 rounded-2xl bg-gray-600 text-white">Project3</button>
        </div>
        <div className=" flex justify-center items-center w-full mt-4 h-100 ">
            <div className=" flex justify-center items-center w-80 h-60 border-gray-400 border-3 rounded-2xl bg-gray-700">
            {imgSrc && <img src={imgSrc} className="w-full h-full rounded-2xl" alt="Selected project" />}
            </div>

        </div>
    </div>
</div>
  );
};

export default Projects;