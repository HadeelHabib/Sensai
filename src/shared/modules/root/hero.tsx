import { IMGS } from "@/utils/imgs";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[95%] m-auto mt-[10%] mb-[5%]">
      <div className="md:flex justify-around">
        <div className="">
          <span className="subtitle-style">AI IMAGE</span>
          <h2 className="title-style">
            Turn Your Text into <br /> the{" "}
            <span className="text-[var(--theme-orange)]">Images</span> in
            Seconds
          </h2>
          <p className="text-[18px] leading-2 mb-[32px] text-[var(--text-color)]">
            Convert word into an image in mere seconds with the image <br />{" "}
            Generator. Type a detaild description
          </p>
          <div className="flex gap-6  my-5">
            <input
              type="text"
              placeholder="Describe what you want to see"
              className="input-style"
            />
            <Button className="button-style !py-[25px] !px-[26px]">Generate</Button>
          </div>
        </div>
        <div className="mt-[-20px]">
          <div className="sm:flex">
            <Image
              className="absolute md:block hidden md:right-[31.5%] md:bottom-[45.5%]"
              src={IMGS.shape1}
              alt=""
            />
            <Image className="banner relative z-[222]" src={IMGS.banner1} alt="" />
            <Image
              className="banner relative z-[222]"
              src={IMGS.banner2}
              alt=""
            />
          </div>
          <div className="sm:flex">
            <Image
              className="absolute md:block hidden right-[70px] bottom-20"
              src={IMGS.shape2}
              alt=""
            />
            <Image className="banner relative z-2" src={IMGS.banner3} alt="" />
            <Image className="banner relative z-2" src={IMGS.banner4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
