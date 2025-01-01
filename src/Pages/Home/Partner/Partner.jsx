import React from 'react';
import { SiNasa, SiSaturn, SiSpacex, SiTesla } from "react-icons/si";
import { GiSolarSystem } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import { FaSpaceShuttle } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Partner = () => {
    useEffect(() => {

        Aos.init({ duration: 2000 });

    }, []);



    return (
        <div className='font-serif my-[200px]' data-aos="zoom-in-up">
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
                <div className='flex items-center gap-3 text-3xl text-blue-400 mx-[100px]'>
                    Space
                    <SiSpacex className='text-6xl' />
                </div>
                <div className='flex items-center gap-3 text-3xl text-blue-400 mx-[100px]'>
                    Space Counter
                    <FaSpaceShuttle />
                </div>
            </Marquee>
        </div>
    );
};

export default Partner;