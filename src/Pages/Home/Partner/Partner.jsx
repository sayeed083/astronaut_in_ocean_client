import React from 'react';
import { SiNasa, SiSaturn, SiTesla } from "react-icons/si";
import { GiSolarSystem } from "react-icons/gi";
import Marquee from "react-fast-marquee";

const Partner = () => {
    return (
        <div className='font-serif mb-10'>
            {/* <div className="flex items-center mb-10 justify-center text-2xl capitalize gap-5 text-cyan-400">
                <hr className="border-t-[2px] border-cyan-400 w-[200px]" />
                <p>Partners</p>
                <hr className="border-t-[2px] border-cyan-400 w-[200px]" />
            </div> */}
            <div className="flex items-center mb-10 justify-center text-xl sm:text-2xl md:text-3xl capitalize gap-5 text-cyan-400">
                <hr className="border-t-[2px] border-cyan-400 w-[150px] sm:w-[200px] md:w-[250px]" />
                <p>Partners</p>
                <hr className="border-t-[2px] border-cyan-400 w-[150px] sm:w-[200px] md:w-[250px]" />
            </div>

            <Marquee>
                <div className='flex items-center gap-2 text-3xl text-blue-400 mx-[100px]'>
                    <SiTesla />
                    Tesla
                </div>
                <div className='flex items-center gap-2 text-7xl text-blue-400 mx-[100px]'>
                    <SiNasa /></div>
                <div className='flex items-center gap-2 text-3xl text-blue-400 mx-[100px]'>
                    <GiSolarSystem /> The Solar Cyber
                </div>
                <div className='flex items-center gap-3 text-3xl text-blue-400 mx-[100px]'>
                    <SiSaturn />
                    Saturn Interval
                </div>
            </Marquee>
        </div>
    );
};

export default Partner;