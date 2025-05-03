'use client'
import HeaderService from '@/component/servicepages/Header';
import Faqservice from '@/component/servicepages/ServiceFaq';
import Worksection from '@/component/servicepages/Worksection';
import useHomeApi from '@/hook/useHomeApi';
import React from 'react';

const AdvertisingService = () => {
    const {data,isLoading} = useHomeApi()
    // faqs
    // testimonial
    return (
        <div className='header-background'>
            <HeaderService  isLoading={isLoading} mainIntro={data?.header} />
            <Worksection data={data?.works} title='Our Ovc'  description='Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing' isLoading={isLoading}/>
            <Faqservice items={data?.faqs} />
        </div>
    );
};

export default AdvertisingService;