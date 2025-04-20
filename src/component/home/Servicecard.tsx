import Image from 'next/image';
import React from 'react';

const Servicecard = () => {
    return (
        <div className='md:w-[488px] md:h-[254px] w-full h-auto md:px-[22px] md:py-[66px] px-4 py-10 flex justify-between items-center gap-5 bg-[#58585833] rounded-[9.91px]'>
            <Image src="/assets/sevice/service1.png" alt='' priority width={121} height={121} />
            <div className='text-white space-y-1'>
                <h3 className='text-[24px] font-montserrat  font-[600] leading-[33.6px]'>Advertising Campaign</h3>
                <p>Our briliant team are expert on both 2D and 3D Animation and Explainer for personal and commercial use.</p>
            </div>
        </div>
    );
};

export default Servicecard;