import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const VisionAndMission = () => {
    return (
        <div className='mt-10 mb-28 flex flex-col sm:flex-col md:flex-col lg:flex-row items-center gap-8 lg:gap-20 justify-between text-white'>
            <div>
                <img src="https://i.postimg.cc/htvtdnkB/Untitled-design-removebg-preview.png" alt="" />
            </div>
            <div>


 

                <div className="px-4 md:px-8 lg:px-14 my-8">

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">

                        <div className="flex items-center text-xl capitalize gap-5 text-cyan-400">
                            <p>Who we are</p>
                            <hr className="border-t-[2px] border-cyan-400 w-[200px] hidden md:block" />
                        </div>

                        <div className="mt-4">
                            <h2 className="text-4xl text-center md:text-left">We Are The Astronomy</h2>
                            <p className="text-cyan-400 my-2 text-4xl text-center md:text-left">Community</p>
                            <hr className="border-t-[2px] border-cyan-400 mt-4 w-[100px] mx-auto md:mx-0" />
                            <p className="my-4 text-lg text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus
                                <br /> blanditiis quisquam ducimus, minus, repudiandae molestiae impedit soluta quae
                                <br /> commodi quas
                            </p>
                        </div>
                    </div>
                </div>



                {/* ---------------3rd Part Start---------------------- */}

                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-between'>

                    {/* No 1 Start */}
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaMoon className="w-[45px] h-[45px] rounded-full bg-cyan-400 text-white p-3" />
                            <p className='text-lg font-semibold'>Vision</p>
                        </div>

                        <p className='ms-16 text-sm'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Ea ratione minima tenetur <br /> consectetur, sint exercitationem assumenda <br /> maxime, tempora, amet unde iure. Voluptatibus.</p>
                    </div>
                    {/* No 1 Ends */}


                    {/* No 2 Start */}
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaSun className="w-[45px] h-[45px] rounded-full bg-cyan-400 text-white p-3" />
                            <p className='text-lg font-semibold'>Mission</p>
                        </div>

                        <p className='ms-16 text-sm'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Ea ratione minima tenetur <br /> consectetur, sint exercitationem assumenda <br /> maxime, tempora, amet unde iure. Voluptatibus.</p>
                    </div>
                    {/* No 2 Ends */}




                </div>

                {/* ---------------3rd Part Ends---------------------- */}

                <button className="btn btn-outline btn-primary w-[150px] ms-16 md:ms-14 lg:ms-16 my-4">Read More</button>
            </div>
        </div>
    );
};

export default VisionAndMission;







// <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-cyan-400 text-white">
//                             <FaMoon />
//                         </div>