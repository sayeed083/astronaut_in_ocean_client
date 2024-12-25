import React, { useState } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUp = () => {

    const [startCount, setStartCount] = useState(false);


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);






    return (
        <ScrollTrigger onEnter={() => setStartCount(true)} onExit={() => setStartCount(false)}>
            <div className='my-10'>
                <div className='flex justify-evenly items-center text-white'>




                    {/* <div className='rounded-full border-cyan-400 border-2 py-8 px-4 w-[180px] h-[180px] text-center' data-aos="fade-up" onAnimationStart={handleAOSAnimation}>
                    <p className='text-5xl font-semibold text-cyan-500'>
                    {startCount ? <CountUp start={0} end={14} duration={2} /> : '0'}
                    <CountUp start={0} end={140} duration={2} delay={0} ></CountUp>

                    </p>
                    <p className='text-2xl capitalize font-semibold'>observatory <br /> zone</p>
                </div> */}


                    <div className='rounded-full border-cyan-400 border-2 py-8 px-4 w-[180px] h-[180px] text-center'>
                        <p className='text-5xl font-semibold text-cyan-500'>
                            {startCount && <CountUp start={0} end={14} duration={5} delay={0} ></CountUp>}
                        </p>
                        <p className='text-2xl capitalize font-semibold'>observatory <br /> zone</p>
                    </div>
                    <div className='rounded-full bg-cyan-400 text-white border py-8 px-4 w-[200px] h-[200px] text-center'>
                        <p className='text-5xl font-semibold'>
                        {startCount && <CountUp start={0} end={25} duration={5} delay={0} ></CountUp>}
                        +
                        </p>
                        <p className='text-2xl capitalize font-semibold'>Years of <br />Experience</p>
                    </div>
                    <div className='rounded-full border-cyan-400 border py-10 px-4 w-[180px] h-[180px] text-center'>
                        <p className='text-5xl font-semibold text-cyan-500 '>
                        {startCount && <CountUp start={0} end={500} duration={5} delay={0} ></CountUp>}
                        +
                        </p>
                        <p className='text-2xl capitalize font-semibold'>Members</p>
                    </div>

                </div>
            </div>
        </ScrollTrigger>
    );
};

export default CounterUp;