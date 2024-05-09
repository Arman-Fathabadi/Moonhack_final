import React from "react";
import { Text, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex items-center pt-[19px] pb-3.5 bg-gray-900_01`}>
      <div className="container-xs flex justify-between gap-5 pr-[199px] md:p-5 md:pr-5 sm:flex-col">
        <Img src="images/img_header_logo.png" alt="logo image" className="h-[44px] w-[44px] object-contain" />
        <ul className="flex flex-wrap items-center gap-[55px] md:gap-5">
          <li>
            <a href="#" className="h-[44px] bg-cover bg-no-repeat">
              <Text size="lg" as="p" className="px-[17px] py-[13px]">
                home
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="mt-2.5">
              <Text as="p" className="px-[17px] py-[13px]">
                about us
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="mt-2.5">
              <Text as="p" className="px-[17px] py-[13px]">
                Contact
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="mt-2.5">
              <Text as="p" className="px-[17px] py-[13px]">
                Chat with ProbE
              </Text>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
