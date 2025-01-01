import React from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Insight = () => {

    useEffect(() => {

        Aos.init({ duration: 1500 });

    }, []);


    return (
        <div>
            <div className='mt-[200px]' data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                <div>
                    <div className="flex items-center text-xl sm:text-2xl md:text-3xl capitalize gap-5 text-cyan-400">
                        <p>Insight</p>
                        <hr className="border-t-[2px] border-cyan-400 w-[200px] sm:w-[250px] md:w-[350px]" />
                    </div>

                    <div>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize'>
                            Latest <span className='text-cyan-400'>News & Blogs</span>
                        </h2>
                        <hr className="border-t-[2px] border-cyan-400 mt-4 w-[60px] sm:w-[80px] md:w-[100px]" />
                    </div>
                </div>
            </div>


            <div className='grid sm:grid-cols-2 grid-cols-1 gap-5' data-aos="fade-up">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/tRkRpWWy/14048.jpg"
                            alt="Album"
                            className='w-[200px] h-[200px]'
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Duis aute irure dolor </h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Officia, quasi?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="blogs">Read More</Link></button>
                        </div>
                    </div>
                </div>

                {/* -------------------- */}

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/L59Hj8dr/190.jpg"
                            alt="Album"
                            className='w-[200px] h-[200px]'
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Iced View</h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Officia, quasi?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="blogs">Read More</Link></button>
                        </div>
                    </div>
                </div>
                {/* ------------- */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/j2MRcYtC/2149988818-1.jpg"
                            alt="Album"
                            className='w-[200px] h-[200px]'
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Starry Nights</h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Officia, quasi?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="blogs">Read More</Link></button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Insight;