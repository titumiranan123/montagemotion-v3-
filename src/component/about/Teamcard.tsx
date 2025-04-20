import Image from 'next/image';
import React from 'react';

const Teamcard = () => {
    return (
        <div className='w-[315px] h-[441px] p-5 rounded-[17.54px] bg-[#58585833]'>
            <Image src={'/assets/member.png'}  alt='' width={275} height={323} className='rounded-[13.09px]' />
            <div className='mt-[18px] space-y-1 text-white'>
                <h3>Jaber Hossain</h3>
                <p>Head of Design</p>
            </div>
        </div>
    );
};

export default Teamcard;