"use client";

import { navItems } from "@/configs/constants";
import { IMGS } from "@/utils/imgs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavItems: React.FC<Props> = ({ isMobile }) => {
  const [active, setActive] = useState('/');
  const path = usePathname();
  
  useEffect(() => {
    if(path){
      setActive(path);
    }
  }, [path, active, setActive]);

  return (
    <div className="">
      <div className="md:flex gap-5 hidden ">
      {navItems.map((i: any ,index:number, )=>(
        <div key={index} className=" font-[400] text-[18px] transition-all  hover:transition-all hover:text-[var(--theme-orange)]">
        <Link href={i.url} className="hover:transition-all hover:text-[var(--theme-orange)] ">{i.title}</Link>
        </div>
      ))}
      </div>
      <div>

        {isMobile && (
          <div className="">
            <div className="w-full text-center py-7">
              <Link href={"/"}>
                <span
                  className={`font-[500] text-[20px] z-[22222222222] font-Poppins text-white`}
                >
                  <Image src={IMGS.Logo} alt=""/>
                </span>
              </Link>
            </div>
          
            
          </div>
        )}

      </div>
    </div>
  );
};

export default NavItems;
