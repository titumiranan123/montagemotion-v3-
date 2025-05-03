'use client'
import HeaderService from '@/component/servicepages/Header';
import Faqservice from '@/component/servicepages/ServiceFaq';
import Worksection from '@/component/servicepages/Worksection';
import useHomeApi from '@/hook/useHomeApi';
import React from 'react';
import CarStackScroll from './Homestackcard';

const ClientWraper = () => {
    const {data,isLoading} = useHomeApi()
  
    return (
        <div className='header-background'>
            <HeaderService  isLoading={isLoading} mainIntro={data?.header} />
            <CarStackScroll />
            <Worksection data={data?.works} title='Our Ovc'  description='Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing' isLoading={isLoading}/>
            <Faqservice items={data?.faqs} />
        </div>
    );
};

export default ClientWraper;