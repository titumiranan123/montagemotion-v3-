'use client'

import React from 'react';
import CarStackScroll from './Homestackcard';
import Shortvideo from './Shortvideo';
import useHomeApi from '@/src/hook/useHomeApi';
import HeaderService from '../servicepages/Header';
import Worksection from '../servicepages/Worksection';
import Faqservice from '../servicepages/ServiceFaq';

const ClientWraper = () => {
    const {data,isLoading} = useHomeApi()
  
    return (
        <div className='header-background'>
            <HeaderService  isLoading={isLoading} mainIntro={data?.header} />
            <CarStackScroll />
            <Worksection data={data?.works} title='Our Ovc'  description='Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing' isLoading={isLoading}/>
            <Shortvideo />
            <Faqservice items={data?.faqs} />
        </div>
    );
};

export default ClientWraper;