'use client'
import MissionVission from '@/src/component/about/MissionVission';
import Ourstorysection from '@/src/component/about/Ourstorysection';
import OurTeam from '@/src/component/about/OurTeam';
import useAboutpage from '@/src/hook/useAbout';
import React from 'react';

const Abouts = () => {
    const {data,isLoading} = useAboutpage()
    const memeber = data && data?.member?.filter((dt:any)=>dt.role === "team_member")
    return (
        <div   className='mt-16 lg:mt-30 min-h-screen max-w-[996px] mx-auto lg:px-0 px-2 pagelogo  '>
            <Ourstorysection about={data?.about} isLoading={isLoading} />
            <MissionVission  />
            <OurTeam  members={memeber}/>
        </div>
    );
};

export default Abouts;