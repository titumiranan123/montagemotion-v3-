'use client'
import HeaderService from '@/src/component/servicepages/Header';
import Faqservice from '@/src/component/servicepages/ServiceFaq';
import Worksection from '@/src/component/servicepages/Worksection';
import useHomeApi from '@/src/hook/useHomeApi';
import React from 'react';

const CustomWebsite = () => {
    const {data,isLoading} = useHomeApi('website')
 const ui_ux = data?.works?.filter((item: any) => item.sub_type === "uiux_design") || [];

    console.log(ui_ux,"kjasdlfjl")
    return (
        <div className='header-background'>
            <HeaderService  isLoading={isLoading} mainIntro={data?.header} />
            <Worksection data={ui_ux} title='Our UI/UX Designs'  description='Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing' isLoading={isLoading}/>
            <Worksection data={data?.works?.filter(((data:any)=>data.sutype !== "uiux_design"))} title='Our UI/UX Designs'  description='Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing' isLoading={isLoading}/>
            <Faqservice items={data?.faqs} />
        </div>
    );
};

export default CustomWebsite;