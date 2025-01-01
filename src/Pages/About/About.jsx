import React from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner';
import VisionAndMission from '../Home/VisionAndMission/VisionAndMission';

const About = () => {
    return (
        <div className='text-center text-cyan-500 text-3xl'>
           <TopBanner title="About Us"
                backgroundImage="https://i.postimg.cc/hP0Z703M/space-background-with-fictional-planets.jpg"></TopBanner>
                <VisionAndMission></VisionAndMission>
        </div>
    );
};

export default About;