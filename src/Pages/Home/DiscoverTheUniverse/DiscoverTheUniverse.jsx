import React from 'react';

const DiscoverTheUniverse = () => {
    return (
        <div className='text-white  my-8'>
            <div className="flex items-center justify-center text-2xl capitalize gap-5 text-cyan-400">
                <hr className="border-t-[2px] border-cyan-400 w-[200px]" />
                <p>What We Do</p>
                <hr className="border-t-[2px] border-cyan-400 w-[200px]" />
            </div>
            <div className='flex items-center gap-5 flex-col'>
                <h3 className='capitalize text-4xl'>discover about the <span className='text-cyan-400'>universe</span></h3>
                <hr className="border-t-[2px] border-cyan-400 w-[100px]" />
            </div>
        </div>
    );
};

export default DiscoverTheUniverse;