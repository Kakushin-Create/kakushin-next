"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -right-10 z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <Image src="/icons/arrow-right.svg" alt="next" width={40} height={40} />
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -left-10 z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/icons/arrow-left.svg"
        alt="previous"
        width={40}
        height={40}
      />
    </div>
  );
};

const OurProjects = () => {
  let projects = [
    { title: "Debate", image: "/projects/debate.png" },
    { title: "L3arn", image: "/projects/l3arn.png" },
    { title: "Kakushin Blog", image: "/projects/kakushinBlog.png" },
    { title: "Kakushin Postcard", image: "/projects/kakushinPostCard.png" },
    { title: "Kinex AI", image: "/projects/kinexaiApp.png" },
    { title: "Kinex AI", image: "/projects/kinexAIApp2.png" },
    {
      title: "Kinex AI Illustration",
      image: "/projects/kinexAIIllustration.png",
    },
    { title: "My BNB", image: "/projects/myBnb.png" },
    { title: "My Sizer", image: "/projects/mySizer.png" },
    { title: "My Sizer App", image: "/projects/mysizerApp.png" },
    { title: "Riddl3", image: "/projects/riddl3.png" },
    { title: "Urban", image: "/projects/urban.png" },
    { title: "Urbane", image: "/projects/urbane.png" },
    { title: "RAID", image: "/projects/raid.png" },
    { title: "Kakushin Illustration", image: "/projects/P2.png" },
    { title: "Kakushin Illustration", image: "/projects/P7.png" },
    { title: "Kakushin Illustration", image: "/projects/P9.png" },
    { title: "Kakushin Illustration", image: "/projects/P10.png" },
    { title: "Kakushin Illustration", image: "/projects/P17.png" },
    { title: "Kakushin Illustration", image: "/projects/P19.png" },
    { title: "Kakushin Illustration", image: "/projects/P21.png" },
    { title: "Kakushin Illustration", image: "/projects/P22.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1167,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="md:p-20 p-20 bg-[#F7F7F7]" id="projects">
      {/* title */}
      <div className="text-center mb-14 md:mb-32">
        <h1 className="largeText mb-4">we do magic</h1>
        <h2 className="titleTextLG">Our Projects</h2>
      </div>
      {/* carousel */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <div className="relative flex flex-col items-center justify-between bg-white shadow-md rounded-lg h-[380px] w-[300px] mx-auto my-10 border-2 border-gray-100">
              <div className="relative w-full h-[240px] overflow-hidden rounded-t-lg">
                <Image
                  height={180}
                  width={280}
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="absolute bottom-10 text-center">
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurProjects;
