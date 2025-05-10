'use client'
import HeaderService from '@/src/component/servicepages/Header';
import Faqservice from '@/src/component/servicepages/ServiceFaq';
import Worksection from '@/src/component/servicepages/Worksection';
import useHomeApi from '@/src/hook/useHomeApi';
import React from 'react';

const Graphic = () => {
    const {data,isLoading} = useHomeApi('graphic')
    return (
         <div className='header-background'>
            <HeaderService  isLoading={isLoading} mainIntro={data?.header} />
            <Worksection data={data?.works} title='Our Ovc'  description='Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing' isLoading={isLoading}/>
            <Faqservice items={data?.faqs} />
        </div>
    );
};

export default Graphic;