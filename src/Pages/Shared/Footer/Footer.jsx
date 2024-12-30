import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneSquareAlt, FaUserAstronaut, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div >



      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>

          <FaUserAstronaut className='text-[100px]'></FaUserAstronaut>
          <div className='my-3'>
            <Link to="/" className=" uppercase text-xl">Astral Journey</Link>
            <p className='text-sm font-normal mt-3'>"Explore the wonders of the universe with Astral Journey! <br /> Discover detailed information about the solar system, planets, <br /> along with engaging blogs that bring the mysteries of space to life."</p>
          </div>

          <ul className='flex items-center gap-5 text-2xl'>
            <li><Link to="https://www.facebook.com/" target="_blank"><FaFacebook />  </Link></li>
            <li><Link to="https://www.instagram.com/" target="_blank"><FaInstagram /> </Link></li>
            <li><Link to="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin />  </Link></li>
            <li><Link to="https://www.youtube.com/watch?v=LinWJsangs4" target="_blank"><FaYoutube />   </Link></li>
          </ul>
        </aside>



        <nav className='text-base'>
          <h6 className="footer-title underline">Get in touch</h6>
          <a className="link link-hover flex items-center gap-2 mb-3">
            <FaMapMarkerAlt />
            26/10, Mirpur, Dhaka-1216</a>
          <a className="link link-hover flex items-center gap-2 mb-3">
            <FaPhoneSquareAlt />
            +8801900-0000-00</a>
          <a className="link link-hover flex items-center gap-2 mb-3">
            <FaWhatsapp />
            +8801400-0000-00</a>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope />
            info@astjourney.com</a>
        </nav>


        <nav className='text-base'>
          <h6 className="footer-title underline">Quick Links</h6>
          <a className="link link-hover">
            <Link to="/">Home</Link>
          </a>
          <a className="link link-hover">
            <Link to="about">About</Link>
          </a>
          <a className="link link-hover">
            <Link to="/">Contact</Link>
          </a>
          <a className="link link-hover">
            <Link to="/">Blogs</Link>
          </a>
        </nav>
        <nav className='text-base'>
          <h6 className="footer-title underline">Recent Posts</h6>
          <p>How many galaxies are in the known universe? <br />
            Fusce vel mauris vel nulla pellentesque egestas. <br />
            August 6, 2014</p>
          <p>How many galaxies are in the known universe? <br />
            Fusce vel mauris vel nulla pellentesque egestas. <br />
            August 6, 2014</p>

        </nav>
      </footer>

      <div className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-cyan-400'>Astral Journey</span></p>
        </aside>
      </div>


    </div>
  );
};

export default Footer;