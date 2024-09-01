import Features from "@/shared/components/features";
import { IMGS } from "@/utils/imgs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="md:flex justify-between md:w-[95%] md:my-[10%] ">
      <div className="">
        <Image
          className="absolute translate-y-8  left-[30px]"
          src={IMGS.shape3}
          alt=""
        />
        <div className="absolute md:w-[500px] h-[80%] bg-[#f9f6ff] md:left-[60px] rounded-[10px]">
          {" "}
        </div>{" "}
      </div>
      <div className=" relative z-2 flex gap-4 md:bottom-[-40px] items-center align-middle">
        <Image className="about-img" src={IMGS.about1} alt="" />
        <Image className="about-img" src={IMGS.about2} alt="" />
      </div>
      <div className="">
        <p className="subtitle-style">about us</p>
        <h3 className="title-style">Create AI Arts in seconds<br/>by Text only</h3>
        <p className="font-[400] text-[var(--text-color)]">AI isn't here to replace human creativity but it can amplify it and take it even<br/> further. So whether you're creating fanart of your favorite anime</p>
        <div className="my-6"><Features/></div>
        <Button className="button-style" >About us</Button>
      </div>
    </div>
  );
};

export default About;
