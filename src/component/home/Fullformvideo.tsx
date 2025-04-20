import React from 'react';
import FullLengthcard from './FullLengthcard';

const Fullformvideo = () => {
    return (
        <div className='container section'>
            <div className="flex  flex-col text-white  mx-auto gap-4">
        <h2 className="w-[800px] text-center mx-auto">Full-form Video</h2>
        <p className="text-center">
          Montage Motion is an Advertising and Digital Agency speciallzing in
          InFluencer Marketing
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[998px] mx-auto gap-4 mt-16">
        <FullLengthcard />
        <FullLengthcard />
        <FullLengthcard />
        <FullLengthcard />
        <FullLengthcard />
        <FullLengthcard />
      </div>
        </div>
    );
};

export default Fullformvideo;