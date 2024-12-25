import React from 'react';

const FeaturedResearch = () => {
    return (
        <div className='my-8 text-white'>
            <div className='flex'>
                {/* 1st master Div */}
                <div>
                    <div className="flex items-center text-xl capitalize gap-5 text-cyan-400">
                        <p>Featured Research</p>
                        <hr className="border-t-[2px] border-cyan-400 w-[200px]" />
                    </div>

                    {/* ---------------1st Part Ends---------------------- */}

                    {/* ---------------2nd Part Start---------------------- */}

                    <div>
                        <h2 className='text-4xl'>Human perspective of the</h2>
                        <p className='text-cyan-400 my-2 text-4xl'>Universe</p>
                        <hr className="border-t-[2px] border-cyan-400 mt-4 w-[100px]" />
                        <p className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus <br /> blanditiis quisquam ducimus, minus,  repudiandae  molestiae impedit soluta quae <br /> commodi quas </p>
                        <p className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus <br /> blanditiis quisquam ducimus, minus,  repudiandae  molestiae impedit soluta quae <br /> commodi quas </p>

                    </div>
                    <button className="btn btn-outline btn-primary w-[150px] my-4">Read More</button>
                </div>
                {/* 1st Master Div End */}

                {/* 2nd Master Div Start */}
                {/* <div>
                    <img className='w-[600px] rounded-xl' src="https://i.postimg.cc/pL7KfYy2/125208.jpg" alt="" />
                    <img src="https://i.postimg.cc/Dy7Vh1vy/2148762006.jpg" alt="" />
                    <img src="https://i.postimg.cc/NfD3jLF8/5134.jpg" alt="" />
                </div> */}
                <div className="relative w-[600px]">
                    <img
                        className="w-[600px] rounded-xl"
                        src="https://i.postimg.cc/pL7KfYy2/125208.jpg"
                        alt="Main"
                    />
                    <img
                        className="absolute top-0 left-0 w-[150px] rounded-xl transform -rotate-6"
                        src="https://i.postimg.cc/Dy7Vh1vy/2148762006.jpg"
                        alt="Top Left"
                    />
                    <img
                        className="absolute bottom-0 right-0 w-[150px] rounded-xl transform rotate-6"
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