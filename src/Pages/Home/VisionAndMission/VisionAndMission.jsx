import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const VisionAndMission = () => {
    return (
        <div className='my-10 flex items-center justify-between'>
            <div>
                <img src="https://i.postimg.cc/htvtdnkB/Untitled-design-removebg-preview.png" alt="" />
            </div>
            <div>


                {/* ---------------1st Part Start---------------------- */}

                <div className="flex items-center text-2xl capitalize gap-5 text-cyan-400">
                    <p>Who we are</p>
                    <hr className="border-t-[2px] border-cyan-400 w-[200px]" />
                </div>

                {/* ---------------1st Part Ends---------------------- */}

                {/* ---------------2nd Part Start---------------------- */}

                <div>
                    <h2 className='text-5xl'>We Are The Astronomy</h2>
                    <p className='text-cyan-400 my-2 text-5xl'>Community</p>
                    <hr className="border-t-[2px] border-cyan-400 mt-4 w-[100px]" />
                    <p className='my-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus <br /> blanditiis quisquam ducimus, minus,  repudiandae  molestiae impedit soluta quae <br /> commodi quas </p>
                </div>
                {/* ---------------2nd Part Ends---------------------- */}


                {/* ---------------3rd Part Start---------------------- */}

                <div className='flex items-center justify-between'>

                    {/* No 1 Start */}
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaMoon className="w-[50px] h-[50px] rounded-full bg-cyan-400 text-white p-3" />
                            <p className='text-xl font-semibold'>Vision</p>
                        </div>

                        <p className='ms-16'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Ea ratione minima tenetur <br /> consectetur, sint exercitationem assumenda <br /> maxime, tempora, amet unde iure. Voluptatibus.</p>
                    </div>
                    {/* No 1 Ends */}


                    {/* No 2 Start */}
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaSun className="w-[50px] h-[50px] rounded-full bg-cyan-400 text-white p-3" />
                            <p className='text-xl font-semibold'>Mission</p>
                        </div>

                        <p className='ms-16'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Ea ratione minima tenetur <br /> consectetur, sint exercitationem assumenda <br /> maxime, tempora, amet unde iure. Voluptatibus.</p>
                    </div>
                    {/* No 2 Ends */}




                </div>

                {/* ---------------3rd Part Ends---------------------- */}

                <button className="btn btn-outline btn-primary w-[200px] my-4">Read More</button>
            </div>
        </div>
    );
};

export default VisionAndMission;







// <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-cyan-400 text-white">
//                             <FaMoon />
//                         </div>