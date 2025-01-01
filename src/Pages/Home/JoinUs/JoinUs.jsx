import React from 'react';
import { Parallax } from "react-parallax";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const JoinUs = () => {

    useEffect(() => {

        Aos.init({ duration: 1500 });

    }, []);


    return (
        <div>
            <Parallax
                bgImage="https://i.postimg.cc/bYSjb4Qg/planet-earth-background.jpg"
                bgImageAlt="Universe Background"
                strength={400}
            >
                <div className="h-[500px] md:h-[600px] lg:h-[700px] flex flex-col justify-center items-center" data-aos="fade-up">
                    <div className="flex items-center mb-10 justify-center text-2xl md:text-3xl lg:text-4xl capitalize gap-5 text-cyan-400">
                        <hr className="border-t-[2px] border-cyan-400 w-[150px] md:w-[200px] lg:w-[250px]" />
                        <p>Partners</p>
                        <hr className="border-t-[2px] border-cyan-400 w-[150px] md:w-[200px] lg:w-[250px]" />
                    </div>
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                        INTERESTED ?
                    </h1>
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 drop-shadow-lg">
                        Let's Explore The Universe
                    </h2>
                    <p className="text-white text-base md:text-lg lg:text-xl max-w-xl text-center mt-4 drop-shadow-md px-4 sm:px-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </Parallax>
        </div>
    );
};

export default JoinUs;
