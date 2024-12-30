import React from 'react';
import { ImHangouts } from "react-icons/im";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
    return (
        <div className='my-36'>



            {/* <div>
                <div>
                    <div className="flex items-center text-2xl capitalize gap-5 text-cyan-400">
                        <p>Testimonial</p>
                        <hr className="border-t-[2px] border-cyan-400 w-[350px]" />
                    </div>

                    <div>
                        <h2 className='text-5xl capitalize'>What <span className='text-cyan-400'>They Say</span> About Us</h2>
                        <hr className="border-t-[2px] border-cyan-400 mt-4 w-[100px]" />
                    </div>
                </div>


            </div> */}
<div className="text-center sm:text-left">
    <div>
        <div className="flex items-center text-xl sm:text-2xl md:text-3xl capitalize gap-5 text-cyan-400 justify-center sm:justify-start">
            <p>Testimonial</p>
            <hr className="border-t-[2px] border-cyan-400 w-[200px] sm:w-[250px] md:w-[350px]" />
        </div>

        <div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize'>
                What <span className='text-cyan-400'>They Say</span> About Us
            </h2>
            <hr className="border-t-[2px] border-cyan-400 mt-4 w-[60px] sm:w-[80px] md:w-[100px] mx-auto" />
        </div>
    </div>
</div>



            {/* Main Comment Section Start */}
            <Marquee speed={100} direction={'right'} pauseOnHover={true}>



                {/* ---------------------- */}

                <div className='my-10 mx-32'>
                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Commodi at eveniet ea quia consequatur error quasi</p>
                    <div className='flex items-center gap-20'>
                        <div className='flex items-center gap-4'>
                            <img className='rounded-full w-20 h-16' src="https://i.postimg.cc/Ssx4GK4g/M-1.jpg" alt="" />
                            <div>
                                <h1>John Smith</h1>
                                <p>Citizen</p>
                            </div>
                        </div>
                        <ImHangouts className='text-blue-400 text-2xl' />
                    </div>
                </div>
                {/* ---------------------- */}




                {/* ---------------------- */}

                <div className='my-10 mx-32'>
                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Commodi at eveniet ea quia consequatur error quasi</p>
                    <div className='flex items-center gap-20'>
                        <div className='flex items-center gap-4'>
                            <img className='rounded-full w-20 h-16' src="https://i.postimg.cc/PqtntqCd/F-4.jpg" alt="" />
                            <div>
                                <h1>Irene Smith</h1>
                                <p>Citizen</p>
                            </div>
                        </div>
                        <ImHangouts className='text-blue-400 text-2xl' />
                    </div>
                </div>
                {/* ---------------------- */}




            </Marquee>


        </div>
    );
};

export default Testimonial;