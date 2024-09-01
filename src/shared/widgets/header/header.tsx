"use client";
import { IMGS } from "@/utils/imgs";
import { Button, Navbar } from "@nextui-org/react";
import Image from "next/image";
import NavItems from "./navbar";
import { ICONS } from "@/utils/icons";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <Navbar
      maxWidth="full"
      isBlurred
      className="w-full shadow-md !z-[11111] h-[100px] bg-white m-auto  sticky"
    >
      <div className="w-[90%] m-auto flex justify-between  items-center">
        <div>
          <Image src={IMGS.Logo} alt=""/>
        </div>
       
        <div className="flex ">
          <NavItems isMobile={false} />
        </div>
        <div className="flex justify-between items-center">
        <span className="font-[400] cursor-pointer inline-block md:text-[20px] hover:transition-all hover:text-[var(--theme-orange)] leading-3 ease-linear mr-[30px] ">{ICONS.search} </span>
        <Button className="button-style">Account</Button>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
