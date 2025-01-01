import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUp = () => {
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <ScrollTrigger onEnter={() => setStartCount(true)} onExit={() => setStartCount(false)}>
            <div className="my-[200px]" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className="flex flex-wrap justify-evenly gap-8 items-center text-white">
                    {/* Observatory Zone */}
                    <div
                        className="rounded-full border-cyan-400 border-2 py-8 px-4 w-[180px] h-[180px] text-center flex flex-col justify-center items-center"
                        aria-label="Observatory Zone Count"
                    >
                        <p className="text-5xl font-semibold text-cyan-500">
                            {startCount && <CountUp start={0} end={14} duration={5} delay={0} />}
                        </p>
                        <p className="text-xl sm:text-2xl capitalize font-semibold text-center">
                            Observatory <br /> Zone
                        </p>
                    </div>

                    {/* Years of Experience */}
                    <div
                        className="rounded-full bg-cyan-400 text-white border py-8 px-4 w-[200px] h-[200px] text-center flex flex-col justify-center items-center"
                        aria-label="Years of Experience Count"
                    >
                        <p className="text-5xl font-semibold">
                            {startCount && <CountUp start={0} end={25} duration={5} delay={0} />}+
                        </p>
                        <p className="text-xl sm:text-2xl capitalize font-semibold text-center">
                            Years of <br /> Experience
                        </p>
                    </div>

                    {/* Members */}
                    <div
                        className="rounded-full border-cyan-400 border py-8 px-4 w-[180px] h-[180px] text-center flex flex-col justify-center items-center"
                        aria-label="Members Count"
                    >
                        <p className="text-5xl font-semibold text-cyan-500">
                            {startCount && <CountUp start={0} end={500} duration={5} delay={0} />}+
                        </p>
                        <p className="text-xl sm:text-2xl capitalize font-semibold text-center">
                            Members
                        </p>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default CounterUp;
