'use client'
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';

const FullLengthcard = () => {
    return (
        <section className='relative md:w-[485.79px] md:h-[273.46px] rounded-[9.91px] mx-auto'>
            <ReactPlayer
                url="https://youtu.be/DDiGYECtQzQ"
                playing={false}
                light="https://i.postimg.cc/BbK6TL06/fwork5.png"
                playIcon={
                    <div className="flex items-center justify-center w-full h-full">
                        <Image
                            src="/assets/playbutton.png"
                            width={80}
                            height={80}
                            alt="Play"
                        />
                    </div>
                }
                width="100%"
                height="100%"
                controls
                config={{
                    youtube: {
                        playerVars: {
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0,
                            controls: 0,
                            fs: 0,
                        },
                    },
                }}
                className="absolute top-0 left-0"
            />
        </section>
    );
};

export default FullLengthcard;
