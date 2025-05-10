'use client'
import MissionVission from '@/src/component/about/MissionVission';
import Ourstorysection from '@/src/component/about/Ourstorysection';
import OurTeam from '@/src/component/about/OurTeam';
import useAboutpage from '@/src/hook/useAbout';
import React from 'react';

const Abouts = () => {
    const {data} = useAboutpage()
    return (
        <div  style={{
            backgroundImage: "url(/assets/background.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
  
          }} className='mt-16 min-h-screen container'>
            <Ourstorysection about={data?.about} />
            <MissionVission  />
            <OurTeam  members={data?.member}/>
        </div>
    );
};

export default Abouts;