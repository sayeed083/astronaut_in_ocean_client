import React from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { IoMdSend } from "react-icons/io"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Contact = () => {


    useEffect(() => {

        Aos.init({ duration: 1000 });

    }, []);



    return (
        <div className=''>
            <TopBanner title="Contact"
                backgroundImage="https://i.postimg.cc/vZSPsCWC/hb3.jpg"></TopBanner>

            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-10 mt-20 mb-44'>


                <div className='flex flex-col items-center justify-center gap-5'>
                    <img data-aos="flip-left" className='w-[400px]' src="https://i.postimg.cc/7ZLkGXx0/3641599-prev-ui.png" alt="" />
                    <h2 data-aos="zoom-in" className='text-lg font-kalam'>Also find Us on:</h2>
                    <div className='grid grid-cols-2 relative gap-10'>


                        <a data-aos="zoom-in-up" className='text-5xl text-sky-300' href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub> <span className='text-sm'>Git Hub</span></a>
                        <a data-aos="zoom-in-up" className='text-5xl text-sky-300' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin></FaLinkedin><span className='text-sm'>Linkedin</span></a>
                        <a data-aos="zoom-in-up" className='text-5xl text-sky-300' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram></FaInstagram><span className='text-sm'>Instagram</span></a>
                        <a data-aos="zoom-in-up" className='text-5xl text-sky-300' href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp></FaWhatsapp><span className='text-sm flex flex-col items-center justify-center mt-5 mx-0 mb-0'>WhatsApp <span> +880183594339</span></span></a>
                    </div>
                </div>
                <div className='border border-accent rounded-lg mx-10 lg:mx-0 p-20' data-aos="zoom-in">
                    <form className='relative flex flex-col'>
                        <label>Name</label>
                        <input className='bg-transparent border rounded-lg border-violet-500 px-2' type="text" name="from_name" />
                        <label>Email</label>
                        <input className='bg-transparent border rounded-lg border-violet-500 px-2' type="email" name="from_email" />
                        <label>Message</label>
                        <textarea className='bg-transparent border rounded-lg border-violet-500 px-2' name="message" />


                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Send " />
                            <IoMdSend className=' translate-x-[130px] lg:translate-x-[160px] -translate-y-[35px] '></IoMdSend>
                        </div>
                        <p className='text-sm text-slate-600'>*Please Wait for some moment for message sent!</p>
                    </form>
                </div>
            </div>









        </div>
    );
};

export default Contact;