import MissionVission from '@/component/about/MissionVission';
import Ourstorysection from '@/component/about/Ourstorysection';
import OurTeam from '@/component/about/OurTeam';
import React from 'react';

const Abouts = () => {
    return (
        <div  style={{
            backgroundImage: "url(/assets/logobackgourd.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
  
          }} className='mt-16 min-h-screen container'>
            <Ourstorysection />
            <MissionVission />
            <OurTeam />
        </div>
    );
};

export default Abouts;