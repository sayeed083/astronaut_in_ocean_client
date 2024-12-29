import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='text-center text-cyan-500 text-3xl'>
            Blogs
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
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="about">Read More</Link></button>
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
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="about">Read More</Link></button>
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
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="about">Read More</Link></button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blogs;