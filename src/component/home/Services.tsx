import React from 'react';
import Servicecard from './Servicecard';

const Services = () => {
    return (
        <div className='container section'>
            <div className="flex  flex-col text-white  mx-auto gap-4">
        <h2 className="w-[800px] text-center mx-auto">Our Services</h2>
        <p className="text-center">
          Montage Motion is an Advertising and Digital Agency speciallzing in
          InFluencer Marketing
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[998px] mx-auto gap-4 mt-16'>
        <Servicecard />
        <Servicecard />
        <Servicecard />
        <Servicecard />
        <Servicecard />
        <Servicecard />
      </div>
        </div>
    );
};

export default Services;