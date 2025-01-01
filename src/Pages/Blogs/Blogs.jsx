import React from 'react';
import { Link } from 'react-router-dom';
import TopBanner from '../../Components/TopBanner/TopBanner';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Blogs = () => {

    
    useEffect(() => {

        Aos.init({ duration: 1000 });

    }, []);



    return (
        <div>
            <TopBanner title="Blogs"
                backgroundImage="https://i.postimg.cc/BQvHMcnm/fictional-space-background-with-meteorites.jpg"></TopBanner>
            <div className='text-center text-cyan-500 text-3xl' data-aos="zoom-in-up">
              
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
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
        </div>
    );
};

export default Blogs;