import React from 'react';


import Aos from 'aos';
import 'aos/dist/aos.css';
import './HomeBanner.css';
import { useEffect } from 'react';

const HomeBanner = () => {


    useEffect(() => {

        Aos.init({ duration: 1000 });

    }, []);




    return (
        <div className="home-banner">
            <img src="https://i.postimg.cc/8CJZPw4c/hb1.jpg" alt="Universe Background" className="background-image" />

            <div className="banner-content mt-10 flex flex-col md:flex-row justify-between px-4">
                {/* First Div (Explore and The Universe) */}
                <div className="text-center md:text-left" data-aos="zoom-in">
                    <h2 className='text-3xl lg:text-5xl font-semibold uppercase'>Explore</h2>
                    <h1 className='text-4xl md:text-6xl xl:text-7xl font-bold uppercase my-4 sm:my-6'>The Universe</h1>
                    <p className='text-sm md:text-lg lg:text-xl font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, <br />
                        voluptatum commodi aut inventore obcaecati veniam.
                    </p>
                    <button className="btn btn-outline btn-primary w-[180px] sm:w-[200px] my-4">Get Started</button>
                </div>

                {/* Second Div (Constellations) */}
                <div className="text-center md:text-right mt-8 md:mt-0" data-aos="zoom-in-up">
                    <h2 className='text-2xl sm:text-3xl font-bold uppercase'>
                        Constellation
                        <p className='text-sm sm:text-base font-medium normal-case text-cyan-400'>Duis aute irure dolor in</p>
                    </h2>
                    <h2 className='text-2xl sm:text-3xl font-bold uppercase my-4'>
                        Constellation
                        <p className='text-sm sm:text-base font-medium normal-case text-cyan-400'>Duis aute irure dolor in</p>
                    </h2>
                    <h2 className='text-2xl sm:text-3xl font-bold uppercase'>
                        Constellation
                        <p className='text-sm sm:text-base font-medium normal-case text-cyan-400'>Duis aute irure dolor in</p>
                    </h2>
                    <h2 className='text-2xl sm:text-3xl font-bold uppercase mt-4'>
                        Constellation
                        <p className='text-sm sm:text-base font-medium normal-case text-cyan-400'>Duis aute irure dolor in</p>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;











