'use client'
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';

interface ServiceFullLengthcardProps {
    work: {
        thumbnail: string;
        video_link: string;
        sub_type?: string;
    }
}

const ServiceFullLengthcard = ({ work }: ServiceFullLengthcardProps) => {
    return (
        <section className='relative w-full h-0 lg:pb-[56.25%] rounded-lg sm:rounded-[9.91px] overflow-hidden'>
           
            <div className='absolute top-0 left-0 w-full h-full'>
                <ReactPlayer
                    url={work?.video_link}
                    playing={false}
                    light={work?.thumbnail}
                    playIcon={
                        <div className="flex items-center justify-center w-full h-full">
                            <Image
                                src="/assets/playbutton.png"
                                width={60}
                                height={60}
                                alt="Play"
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
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
                    className="react-player"
                />
            </div>
        </section>
    );
};

export default ServiceFullLengthcard;