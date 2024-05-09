import React from "react";
import { Text, Button, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center pt-[100px] pb-[59px] px-14 md:p-5 bg-black-900`}
    >
      <div className="mx-auto w-full max-w-[1242px]">
        <div className="flex items-start justify-between gap-5 pb-[30px] pt-[7px] md:flex-col sm:pb-5">
          <Text size="7xl" as="p" className="w-[67%] !font-manrope leading-[43px] md:w-full">
            <span className="text-white-A700_01">
              <>
                “The important thing is not to stop questioning.
                <br />
                 Curiosity has its own reason for existing.”
                <br />
              </>
            </span>
            <span className="text-2xl text-white-A700_01">-Einstein</span>
          </Text>
          <Button
            size="md"
            shape="square"
            rightIcon={
              <Img src="images/img_arrowleft_white_a700_01.png" alt="arrow_left" className="h-[59px] w-[55px]" />
            }
            className="mt-[11px] min-w-[218px] gap-[35px] font-manrope font-thin text-white-A700_01 sm:pl-5"
          >
            Contact
          </Button>
        </div>
        <div className="flex items-center justify-between gap-5 sm:flex-col">
          <Text size="md" as="p" className="!font-manrope !text-blue_gray-400_01">
            Penta Probe © 2024
          </Text>
          <div className="flex gap-[9px] pb-2.5">
            <Text
              as="p"
              className="h-[22px] bg-[url(/public/images/img_twitter.png)] bg-cover bg-no-repeat py-px pl-5 !font-manrope !font-thin"
            >
              Youtube
            </Text>
            <div className="flex flex-wrap gap-2.5">
              <Text
                as="p"
                className="h-[22px] bg-[url(/public/images/img_instagram.png)] bg-cover bg-no-repeat py-px pl-[25px] pr-1.5 !font-manrope !font-thin sm:pl-5"
              >
                Instagram
              </Text>
              <Text
                as="p"
                className="h-[22px] bg-[url(/public/images/img_linkedin.png)] bg-cover bg-no-repeat py-px pl-[25px] pr-0.5 !font-manrope !font-thin sm:pl-5"
              >
                Linkedin
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
