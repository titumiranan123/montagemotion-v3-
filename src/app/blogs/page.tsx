"use client";
import useBlog from "@/src/hook/useBlogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  const { data ,isLoading } = useBlog();
  return (
    <div style={{
        backgroundImage: "url(/assets/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }} className="relative container lg:mt-20 mt-16 min-h-screen">
      <div className="text-white flex flex-col justify-center items-center lg:w-[695px] gap-6 mx-auto w-full">
        <h2 className="poppins">Read Our Blogs</h2>
        <p>
          Montage Motion is an Advertising and Digital Agency specializing in
          Influencer Marketing.
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-[1000px] mx-auto w-full md:grid-cols-2 gap-5 mt-10 lg:mt-16" >
        {data?.map((blog: any, idx: number) => (
          <Blogcard
            key={idx}
            image={blog.image}
            title={blog.title}
            short_description={blog.short_description}
            slug={blog.slug}
          />
        ))}
      </div>
    </div>
  );
};
const Blogcard = ({
  image,
  title,
  short_description,
  slug
}: {
  image: string;
  title: string;
  short_description: string;
  slug:string
}) => {
  return (
    <Link href={`/blogs/${slug}`} className="lg:w-[488px] block cursor-pointer lg:h-[386.46px] rounded-[17.45px] p-4 text-[#58585833] border border-[#58585833] backdrop-blur-[25.82px] overflow-hidden">
      <div className="lg:w-[456px] lg:h-[242px] overflow-hidden">
        <Image src={image} alt={title} width={456} height={242} />
      </div>
      <div className="mt-4">
        <h3 className="text-white md:text-[18px] text-[22px] font-[700] leading-[26px]">{title.slice(0,60)} {title.length > 60 ?". . . . .":""}</h3>
        <p  className="text-white"> {short_description.slice(0,60)} {short_description.length > 60 ?". . . . .":""}</p>
      </div>
    </Link>
  );
};

export default Blogs;
