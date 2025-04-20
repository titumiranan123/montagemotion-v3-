'use client'
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';

const Shortcard = () => {
    return (
        <section className='relative w-[321.11px] h-[575.59px] rounded-[9.91px] mx-auto'>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=Csm8ntWx6w8"
                playing={false}
                light="https://i.postimg.cc/tCnPkJ5F/short1.png"
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

export default Shortcard;
