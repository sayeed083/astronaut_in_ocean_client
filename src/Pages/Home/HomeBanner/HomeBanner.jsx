import React from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="home-banner">
            {/* <img src="https://i.postimg.cc/vZSPsCWC/hb3.jpg" alt="Universe Background" className="background-image" /> */}
            {/* <img src="https://i.postimg.cc/YS5b4gD3/hb2.jpg" alt="Universe Background" className="background-image" /> */}
            <img src="https://i.postimg.cc/8CJZPw4c/hb1.jpg" alt="Universe Background" className="background-image" />
            <div className="banner-content mt-10 flex justify-between">
                <div>
                    <h2 className='text-5xl font-semibold uppercase'>Explore</h2>
                    <h1 className='text-7xl font-bold uppercase my-8'>The Universe</h1>
                    <p className='text-lg font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, <br /> voluptatum commodi aut inventore obcaecati veniam.</p>
                    <button className="btn btn-outline btn-primary w-[200px] my-4">Get Started</button>
                </div>
                <div>
                    <h2 className='text-3xl text-end font-bold uppercase '>
                        Constellation
                        <p className='text-base font-medium normal-case text-cyan-400'> Duis aute irure dolor in </p>
                    </h2>
                    <h2 className='text-3xl text-end font-bold uppercase my-8'>
                        Constellation
                        <p className='text-base font-medium normal-case text-cyan-400'> Duis aute irure dolor in </p>
                    </h2>
                    <h2 className='text-3xl text-end font-bold uppercase'>
                        Constellation
                        <p className='text-base font-medium normal-case text-cyan-400'> Duis aute irure dolor in </p>
                    </h2>
                    <h2 className='text-3xl text-end font-bold uppercase mt-8'>
                        Constellation
                        <p className='text-base font-medium normal-case text-cyan-400'> Duis aute irure dolor in </p>
                    </h2>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;




// import React from 'react';

// const HomeBanner = () => {
//     return (
//         <div>
//             <img src="https://i.postimg.cc/vZSPsCWC/hb3.jpg" alt="" />
//             <div>
//                 <h2>Explore</h2>
//                 <h1>The Universe</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum commodi aut inventore obcaecati veniam.</p>
//             </div>
//         </div>
//     );
// };

// export default HomeBanner;















//absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]