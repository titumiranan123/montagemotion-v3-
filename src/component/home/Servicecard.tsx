
import Link from 'next/link';
import React from 'react';
interface Iservice {
    id?:string,
    title:string,
    description:string
    image:string
    ispublish: boolean
    position: number
    href:string
}
const Servicecard = ({serivce}: {serivce:Iservice}) => {
    
    return (
        <Link href={`${serivce.href}`} className='md:w-[488px] md:h-[224px] w-full h-auto md:px-[22px] md:py-[66px] px-4 py-10 flex justify-between items-center gap-5 bg-[#58585833] rounded-[9.91px]'>
            <div className='text-white space-y-1'>
                <h3 className='text-[24px] font-montserrat  font-[600] leading-[33.6px]'>{serivce.title}</h3>
                <p>{serivce.description}</p>
            </div>
        </Link>
    );
};

export default Servicecard;