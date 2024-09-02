import { ICONS } from "@/utils/icons";
import { IMGS } from "@/utils/imgs";
import Image from "next/image";
import React from "react";

const GenerateImgs = () => {
  return (
    <div className="md:w-[95%] mx-auto my-[10%] text-center">
      <span className="subtitle-style">HOW IT WORKS</span>
      <h2 className="title-style">How To Gnenerate Image</h2>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-2 items-center justify-around">
        <div className="">
          <Image
            className="absolute md:block hidden left-[10px] bottom-[-95%] "
            src={IMGS.shape4}
            alt=""
          />

          <div className="relative bg-[#f9f6ff] rounded-[10px] p-[40px] mb-[32px] ">
            <div className="bg-white rounded-[5px] shadow-md px-[20px] py-[18px]">
              <p className="bg-[#e4d7ff] md:text-left px-[5px] mb-[5px] leading-[18px] text-[12px] w-full">
                AI Content Tool creates content{" "}
              </p>
              <p className="bg-[#e4d7ff] md:text-left px-[5px] mb-[5px] leading-[18px] text-[12px]">
                {" "}
                for a wide range professional needs. From{" "}
              </p>
              <p className="bg-[#e4d7ff] md:text-left px-[5px] mb-[5px] leading-[18px] text-[12px]">
                headlines to entire articles
              </p>
            </div>
          </div>
          <h3 className="hover:text-[var(--theme-orange)] hover:transition-all hover:cursor-pointer text-[24px] leading-[32px] font-[600]">
            Type the Prompt
          </h3>
          <p className="max-w-[330px] text-center my-4 mx-auto text-[var(--text-color)]">
            With our all AI the can make the never <br /> before seen images
            fores New{" "}
          </p>
        </div>
        <div className="">
          <div className="relative bg-[#f9f6ff] rounded-[10px] p-[40px] mb-[32px]">
            <div className="bg-white rounded-[5px] shadow-md px-[20px] py-[18px]">
              <h3 className="px-[20px] font-[600] py-[10px] border border-[var(--theme-orange)] rounded-md text-[var(--theme-orange)]">
                Generate Image
              </h3>
              <Image
                className="absolute right-[40px] bottom-[30px]"
                src={IMGS.icon1}
                alt=""
              />
            </div>
          </div>
          <h3 className="font-[600] hover:text-[var(--theme-orange)] hover:transition-all hover:cursor-pointer text-[24px] leading-[32px]">
            Click on Generate
          </h3>
          <p className="max-w-[330px] my-4 mx-auto text-[var(--text-color)]">
            With our all AI the can make the never <br /> before seen images
            fores New{" "}
          </p>
        </div>

        <div className="">
          <div className="relative bg-[#f9f6ff] rounded-[10px] p-[40px] w-auto mb-[32px]">
            <Image
              className="rounded-[5px] m-auto shadow-md "
              src={IMGS.working}
              alt=""
            />
            <button className="download">{ICONS.download}</button>
          </div>
          <h3 className="font-[600] hover:text-[var(--theme-orange)] hover:transition-all hover:cursor-pointer text-[24px] leading-[32px]">
            Download Image
          </h3>
          <p className="max-w-[330px] my-4 mx-auto text-[var(--text-color)]">
            With our all AI the can make the never <br /> before seen images
            fores New{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenerateImgs;
