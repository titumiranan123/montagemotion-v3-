import Image from 'next/image';
import React from 'react';

const Ourstorysection:React.FC = () => {
    return (
            <div className='max-w-[1000px] mx-auto flex justify-between items-center lg:gap-[100px]'>
                <Image src={'/assets/ourstory.png'} alt='' width={418.25} height={569} />
                <div>
                    <h2 className='text-white'>Our Story</h2>
                    <p className='text-white'>
                    Welcome to Montage Motion, a hub of creativity and innovation in the world of video editing. At Montage Motion, we believe in the transformative power of storytelling through visuals. Our dedicated team combines technical expertise with artistic flair to craft cinematic experiences that resonate with your audience.
With a passion for precision and an eye for detail, we bring your raw footage to life, turning moments into memorable narratives. Our commitment to excellence is evident in every frame we edit. Explore our portfolio to witness the seamless fusion of technology and creativity, showcasing our ability to elevate ordinary content into extraordinary stories. <br /><br />

At Montage Motion, we don't just edit videos; we curate visual experiences that leave a lasting impact. Join us on a journey where your vision meets our expertise, and together, we create stories that captivate, inspire, and endure. Your narrative matters, and we're here to make it unforgettable.
                    </p>
                </div>
            </div>
    );
};

export default Ourstorysection;