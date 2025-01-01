import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Team = () => {


    useEffect(() => {

        Aos.init({ duration: 2000 });

    }, []);



    return (
        <div className='my-[200px]'>
            {/* Section 1 */}
            <div>
                <div className="text-center sm:text-left" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className="flex items-center text-xl sm:text-2xl md:text-3xl capitalize gap-5 text-cyan-400 justify-center sm:justify-start">
                        <p>Team</p>
                        <hr className="border-t-[2px] border-cyan-400 w-[200px] sm:w-[250px] md:w-[350px]" />
                    </div>

                    <div>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize'>
                            meet our <span className='text-cyan-400'>professional</span>
                        </h2>
                        <p className='mt-2 text-3xl sm:text-4xl md:text-5xl'>Team</p>
                        <hr className="border-t-[2px] border-cyan-400 mt-4 w-[80px] sm:w-[100px] md:w-[120px] mx-auto" />
                    </div>
                </div>


            </div>

            {/* Section 2 */}
            <div className="flex flex-wrap items-center justify-center gap-10 my-14">
                {/* First Image */}
                <div className="relative group" data-aos="flip-left">
                    <img
                        src="https://i.postimg.cc/Y0x1B8Zr/M-2.jpg"
                        alt="Person 1"
                        className="rounded-full border-4 border-cyan-500 bg-white w-44 h-36 sm:w-48 sm:h-48 md:w-64 md:h-50"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-xl font-bold">John Doe</h3>
                        <p className="text-white text-sm">Founder</p>
                    </div>
                </div>

                {/* Second Image */}
                <div className="relative group" data-aos="flip-up">
                    <img
                        src="https://i.postimg.cc/Vv2K5K4j/F-3.jpg"
                        alt="Person 2"
                        className="rounded-full border-4 border-cyan-500 bg-white w-44 h-36 sm:w-48 sm:h-48 md:w-64 md:h-50"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-xl font-bold">Amelia Johns</h3>
                        <p className="text-white text-sm">Lecturer</p>
                    </div>
                </div>

                {/* Third Image */}
                <div className="relative group" data-aos="flip-right">
                    <img
                        src="https://i.postimg.cc/Hkr76pYs/M-3.jpg"
                        alt="Person 3"
                        className="rounded-full border-4 border-cyan-500 bg-white w-44 h-36 sm:w-48 sm:h-48 md:w-64 md:h-50"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-xl font-bold">Michael Brown</h3>
                        <p className="text-white text-sm">Lecturer</p>
                    </div>
                </div>

                {/* Fourth Image */}
                <div className="relative group" data-aos="flip-down">
                    <img
                        src="https://i.postimg.cc/FFxcRWCm/M-4.jpg"
                        alt="Person 4"
                        className="rounded-full border-4 border-cyan-500 bg-white w-44 h-36 sm:w-48 sm:h-48 md:w-64 md:h-50"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-xl font-bold">David Johns</h3>
                        <p className="text-white text-sm">Astrophotographer</p>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="my-4 text-lg sm:text-xl md:text-2xl" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                <p className="text-center md:text-end">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus
                    <br />
                    blanditiis quisquam ducimus, minus, repudiandae molestiae impedit soluta quae
                    <br />
                    commodi quas.
                </p>
                <div className="flex justify-center md:justify-end">
                    <button className="btn btn-outline btn-primary w-[150px] my-4">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Team;























// import React from 'react';

// const Team = () => {
//     return (
//         <div className='my-32'>

//             <div>
//                 <div>
//                     <div className="flex items-center text-2xl capitalize gap-5 text-cyan-400">
//                         <p>Team</p>
//                         <hr className="border-t-[2px] border-cyan-400 w-[350px]" />
//                     </div>

//                     <div>
//                         <h2 className='text-5xl capitalize'>meet our <span className='text-cyan-400'>professional</span></h2>
//                         <p className='mt-2 text-5xl'> Team</p>
//                         <hr className="border-t-[2px] border-cyan-400 mt-4 w-[100px]" />
//                     </div>
//                 </div>


//             </div>

//             <div className="flex items-center justify-center gap-10 my-14">
//                 {/* <!-- First Image --> */}
//                 <div className="relative group">
//                     <img
//                         src="https://i.postimg.cc/Y0x1B8Zr/M-2.jpg"
//                         alt="Person 1"
//                         className="rounded-full border-4 border-cyan-500 bg-white w-60 h-50"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                         <h3 className="text-white text-xl font-bold">John Doe</h3>
//                         <p className="text-white text-sm">Founder</p>
//                     </div>
//                 </div>

//                 {/* <!-- Second Image --> */}
//                 <div className="relative group">
//                     <img
//                         src="https://i.postimg.cc/Vv2K5K4j/F-3.jpg"
//                         alt="Person 2"
//                         className="rounded-full border-4 border-cyan-500 bg-white w-60 h-50"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                         <h3 className="text-white text-xl font-bold">Amelia Johns</h3>
//                         <p className="text-white text-sm">Lecturer</p>
//                     </div>
//                 </div>

//                 {/* <!-- Third Image --> */}
//                 <div className="relative group">
//                     <img
//                         src="https://i.postimg.cc/Hkr76pYs/M-3.jpg"
//                         alt="Person 3"
//                         className="rounded-full border-4 border-cyan-500 bg-white w-60 h-50"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                         <h3 className="text-white text-xl font-bold">Michael Brown</h3>
//                         <p className="text-white text-sm">Lecturer</p>
//                     </div>
//                 </div>

//                 {/* <!-- Fourth Image --> */}
//                 <div className="relative group">
//                     <img
//                         src="https://i.postimg.cc/FFxcRWCm/M-4.jpg"
//                         alt="Person 4"
//                         className="rounded-full border-4 border-cyan-500 bg-white w-60 h-50"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                         <h3 className="text-white text-xl font-bold">David Johns</h3>
//                         <p className="text-white text-sm">Astrophotographer</p>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <p className='my-4 text-lg text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus <br /> blanditiis quisquam ducimus, minus,  repudiandae  molestiae impedit soluta quae <br /> commodi quas </p>
//                <div className='flex justify-end'>
//                <button className="btn btn-outline btn-primary w-[150px] my-4">Read More</button>
//                </div>
//             </div>


//         </div>
//     );
// };

// export default Team;


