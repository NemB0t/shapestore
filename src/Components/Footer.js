import React from "react";
import { AiFillGithub } from 'react-icons/ai';

export default function Footer(){
    return(
        <div className="flex items-center justify-center h-10 gap-1">
            {/* bg-slate-500 h-10 flex justify-center items-center gap-1 */}
            Copyright © 2022 nembot 
            <a href="https://github.com/NemB0t"><AiFillGithub/></a> 
        </div>
    )
}