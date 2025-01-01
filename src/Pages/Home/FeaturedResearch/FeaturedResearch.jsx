import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FeaturedResearch = () => {


    useEffect(() => {

        Aos.init({ duration: 1000 });

    }, []);





    return (
        <div className="my-[200px] text-white px-4 md:px-8 lg:px-16">
            <div className="flex flex-wrap lg:flex-nowrap gap-16">
                {/* 1st Master Div */}
                <div className="flex-1 text-center lg:text-left" data-aos="zoom-in-down">
                    <div className="flex items-center justify-center lg:justify-start text-lg sm:text-xl capitalize gap-5 text-cyan-400">
                        <p>Featured Research</p>
                        <hr className="border-t-[2px] border-cyan-400 w-[150px] sm:w-[200px] hidden lg:block" />
                    </div>

                    {/* 1st Part Ends */}

                    {/* 2nd Part Start */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl">Human perspective of the</h2>
                        <p className="text-cyan-400 my-2 text-2xl sm:text-3xl md:text-4xl">Universe</p>
                        <hr className="border-t-[2px] border-cyan-400 mt-4 w-[80px] sm:w-[100px] mx-auto lg:mx-0" />
                        <p className="my-4 text-base sm:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus
                            <br />
                            blanditiis quisquam ducimus, minus, repudiandae molestiae impedit soluta quae
                            <br />
                            commodi quas.
                        </p>
                        <p className="my-4 text-base sm:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus
                            <br />
                            blanditiis quisquam ducimus, minus, repudiandae molestiae impedit soluta quae
                            <br />
                            commodi quas.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <button className="btn btn-outline btn-primary w-[150px] my-4">Read More</button>
                    </div>
                </div>
                {/* 1st Master Div End */}

                {/* 2nd Master Div Start */}
                <div className="relative flex-1 max-w-full lg:max-w-[600px] hidden lg:block" data-aos="zoom-in-up">
                    {/* Main Image */}
                    <img
                        className="w-full rounded-xl"
                        src="https://i.postimg.cc/pL7KfYy2/125208.jpg"
                        alt="Main"
                    />

                    {/* Top Left Image */}
                    <img
                        className="absolute top-4 left-4 w-[100px] sm:w-[120px] md:w-[150px] rounded-xl transform -rotate-6"
                        src="https://i.postimg.cc/Dy7Vh1vy/2148762006.jpg"
                        alt="Top Left"
                    />

                    {/* Bottom Right Image */}
                    <img
                        className="absolute bottom-4 right-4 w-[100px] sm:w-[120px] md:w-[150px] rounded-xl transform rotate-6"
                        src="https://i.postimg.cc/NfD3jLF8/5134.jpg"
                        alt="Bottom Right"
                    />
                </div>
                {/* 2nd Master Div End */}
            </div>
        </div>
    );
};

export default FeaturedResearch;



// import React from 'react';

// const FeaturedResearch = () => {
//     return (
//         <div className='my-8 text-white'>
//             <div className='flex'>

//                 <div>
//                     <div className="flex items-center text-xl capitalize gap-5 text-cyan-400">
//                         <p>Featured Research</p>
//                         <hr className="border-t-[2px] border-cyan-400 w-[200px]" />
//                     </div>


//                     <div>
//                         <h2 className='text-4xl'>Human perspective of the</h2>
//                         <p className='text-cyan-400 my-2 text-4xl'>Universe</p>
//                         <hr className="border-t-[2px] border-cyan-400 mt-4 w-[100px]" />
//                         <p className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus <br /> blanditiis quisquam ducimus, minus,  repudiandae  molestiae impedit soluta quae <br /> commodi quas </p>
//                         <p className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus <br /> blanditiis quisquam ducimus, minus,  repudiandae  molestiae impedit soluta quae <br /> commodi quas </p>

//                     </div>
//                     <button className="btn btn-outline btn-primary w-[150px] my-4">Read More</button>
//                 </div>

//                 <div className="relative w-[600px]">
//                     <img
//                         className="w-[600px] rounded-xl"
//                         src="https://i.postimg.cc/pL7KfYy2/125208.jpg"
//                         alt="Main"
//                     />
//                     <img
//                         className="absolute top-0 left-0 w-[150px] rounded-xl transform -rotate-6"
//                         src="https://i.postimg.cc/Dy7Vh1vy/2148762006.jpg"
//                         alt="Top Left"
//                     />
//                     <img
//                         className="absolute bottom-0 right-0 w-[150px] rounded-xl transform rotate-6"
//                         src="https://i.postimg.cc/NfD3jLF8/5134.jpg"
//                         alt="Bottom Right"
//                     />
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default FeaturedResearch;