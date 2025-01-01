import React from 'react';

const TopBanner = ({ title, backgroundImage }) => {
    return (
        <div
            className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className=" bg-opacity-50 text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 py-2 rounded">
                {title}
            </div>
        </div>
    );
};

export default TopBanner;