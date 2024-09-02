import Features from "@/shared/components/features";
import { IMGS } from "@/utils/imgs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

//lg:1024  ,sm:640 ,xl:1280  ,md:768  ,2xl:1536

const About = () => {
  return (
    <div className="xl:flex justify-between md:w-[95%] md:my-[10%] ">
      <div className="">
        <Image
          className="absolute translate-y-8 left-[30px]"
          src={IMGS.shape3}
          alt=""
        />
        <div className="absolute lg:block hidden  md:w-[500px] h-[80%] bg-[#f9f6ff] md:left-[60px] rounded-[10px]">
          {" "}
        </div>{" "}
      </div>
      <div className=" mx-auto w-[95%] xl:w-[50%] relative z-2 md:flex md:bottom-[-40px] gap-4 items-center align-middle">
        <Image className="about-img mx-auto mt-4 lg:ml-[10%]  w-[95%]" src={IMGS.about1} alt="" />
        <Image className="about-img mx-auto mt-4 w-[95%]" src={IMGS.about2} alt="" />
      </div>
      <div className="xl:w-[60%] md:my-10 w-[95%] mx-auto md:ml-[5%] my-[10%]">
        <p className="subtitle-style">about us</p>
        <h3 className="title-style">
          Create AI Arts in seconds
          <br />
          by Text only
        </h3>
        <p className="font-[400] text-[var(--text-color)]">
          AI isn't here to replace human creativity but it can amplify it and
          take it even
          <br /> further. So whether you're creating fanart of your favorite
          anime
        </p>
        <div className="my-6">
          <Features />
        </div>
        <Button className="button-style">About us</Button>
      </div>
    </div>
  );
};

export default About;
