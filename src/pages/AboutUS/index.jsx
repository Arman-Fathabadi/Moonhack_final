import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
import Header from "../../components/Header";

export default function AboutUSPage() {
  return (
    <>
      <Helmet>
        <title>About Our Team - Passionate Blockchain Design Advocates</title>
        <meta
          name="description"
          content="Meet the passionate team behind our brand, dedicated to blockchain technology and exceptional design. Discover our commitment to user experience and innovation."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-blue_gray-300">
        <div className="flex flex-col">
          {/* navigation bar section */}
          <div className="relative z-[1]">
            <Header className="relative z-[2]" />
            <div className="relative mt-[-84px] flex bg-gray-900_01 pb-3.5 pl-[150px] pr-14 pt-[19px] md:px-5">
              <div className="flex w-[82%] items-start justify-between gap-5 md:w-full md:flex-col">
                <Img
                  src="images/img_631644375dd15fe_44x44.png"
                  alt="logo image"
                  className="mt-[7px] h-[44px] w-[44px] object-cover md:w-full"
                />
                <div className="flex w-[65%] items-start justify-between gap-5 pl-[60px] pr-[199px] md:w-full md:px-5 sm:flex-col">
                  <div className="flex w-[63%] items-start justify-between gap-5 sm:w-full">
                    <div className="flex h-[44px] items-center bg-cover bg-no-repeat px-[11px] pb-3.5 pt-[11px] md:h-auto">
                      <Text size="lg" as="p">
                        home
                      </Text>
                    </div>
                    <Text as="p" className="mt-2.5">
                      about us
                    </Text>
                    <Text as="p" className="mt-2.5">
                      Contact
                    </Text>
                  </div>
                  <Text as="p" className="mt-2.5">
                    Chat with ProbE
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* about us intro section */}
          <div className="relative mt-[-1px] h-[831px] md:h-auto">
            <Img src="images/img_svg_blue_gray_300.svg" alt="vector image" className="mt-[232px] h-[171px] w-[3%]" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[130px] md:gap-[97px] sm:gap-[65px]">
              <div className="container-xs pl-[311px] pr-[169px] md:p-5 md:px-5">
                <div className="flex flex-col items-start gap-[9px]">
                  <Text size="8xl" as="p">
                    About Us
                  </Text>
                  <div className="flex flex-col items-center gap-5 self-stretch">
                    <Text size="4xl" as="p" className="w-full leading-9 !text-white-A700_99">
                      Team of product and brand designers that are really passionate about blockchain technology and
                      good design. We are not just UI freaks! We advocate users for better product experience and common
                      sense.
                    </Text>
                    <div className="flex self-start pt-4">
                      <Text size="4xl" as="p">
                        meet the team
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[95%] md:w-full md:flex-col md:p-5">
                <Img
                  src="images/img_about02_jpg.png"
                  alt="about image 1"
                  className="h-[300px] w-[300px] object-cover md:w-full"
                />
                <Img
                  src="images/img_about01_jpg.png"
                  alt="about image 2"
                  className="ml-[93px] h-[300px] w-[300px] object-cover md:ml-0 md:w-full"
                />
                <Img
                  src="images/img_about03_jpg.png"
                  alt="about image 3"
                  className="ml-[110px] h-[300px] w-[300px] object-cover md:ml-0 md:w-full"
                />
                <Img
                  src="images/img_about01_jpg.png"
                  alt="about image 4"
                  className="ml-[121px] h-[300px] w-[300px] object-cover md:ml-0 md:w-full"
                />
              </div>
            </div>
          </div>

          {/* team highlights section */}
          <div className="relative z-[3] ml-[33px] mt-[135px] flex w-[80%] flex-wrap justify-between gap-5 md:ml-0 md:w-full md:p-5">
            <Text size="4xl" as="p">
              Ahmadreza
            </Text>
            <Text size="4xl" as="p">
              Arman
            </Text>
            <Text size="4xl" as="p">
              Mahdiar
            </Text>
            <Text size="4xl" as="p">
              Kasra
            </Text>
          </div>

          {/* detailed description section */}
          <div className="relative h-[674px] overflow-auto">
            <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full justify-between gap-5 md:relative md:flex-col">
              <Text size="4xl" as="p" className="w-[25%] leading-9 !text-white-A700_99 md:w-full md:p-5">
                Team of product and brand designers that are really passionate about blockchain technology and good
                design. We are not just UI freaks! We advocate users for better product experience and common sense.
              </Text>
              <Text size="4xl" as="p" className="w-[25%] leading-9 !text-white-A700_99 md:w-full md:p-5">
                Team of product and brand designers that are really passionate about blockchain technology and good
                design. We are not just UI freaks! We advocate users for better product experience and common sense.
              </Text>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col">
              <div className="container-xs pl-[665px] pr-[81px] md:p-5 md:px-5">
                <Text size="4xl" as="p" className="leading-9 !text-white-A700_99">
                  Team of product and brand designers that are really passionate about blockchain technology and good
                  design. We are not just UI freaks! We advocate users for better product experience and common sense.
                </Text>
              </div>
              <div className="relative mt-[-317px] flex flex-col items-start">
                <div className="container-xs pl-[271px] pr-[475px] md:p-5 md:px-5">
                  <div className="pb-[72px] md:pb-5">
                    <Text size="4xl" as="p" className="leading-9 !text-white-A700_99">
                      Team of product and brand designers that are really passionate about blockchain technology and
                      good design. We are not just UI freaks! We advocate users for better product experience and common
                      sense.
                    </Text>
                  </div>
                </div>

                {/* quote contact info section */}
                <div className="relative mt-[-79px] flex flex-col items-center justify-center self-stretch bg-black-900 px-14 pb-[59px] pt-[100px] md:p-5">
                  <div className="flex w-[83%] items-start justify-between gap-5 pb-[30px] pt-[7px] md:w-full md:flex-col sm:pb-5">
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
                      size="xl"
                      shape="square"
                      rightIcon={<Img src="images/img_arrowleft.svg" alt="arrow_left" className="h-[63px] w-[63px]" />}
                      className="mt-[11px] min-w-[226px] gap-[35px] font-manrope font-thin text-white-A700_01 sm:pl-5"
                    >
                      Contact
                    </Button>
                  </div>
                  <div className="flex w-[83%] items-center justify-between gap-5 md:w-full sm:flex-col">
                    <Text size="md" as="p" className="!font-manrope !text-blue_gray-400_01">
                      Penta Probe © 2024
                    </Text>
                    <div className="flex items-start">
                      <Text
                        as="p"
                        className="h-[22px] bg-[url(/public/images/img_twitter.png)] bg-cover bg-no-repeat pl-5 !font-manrope !font-thin"
                      >
                        Youtube
                      </Text>
                      <div className="flex flex-wrap gap-2.5 pb-2.5 pl-2.5">
                        <Text
                          as="p"
                          className="h-[22px] bg-[url(/public/images/img_instagram.png)] bg-cover bg-no-repeat pb-[-2px] pl-[25px] pr-1.5 pt-0.5 !font-manrope !font-thin sm:pl-5"
                        >
                          Instagram
                        </Text>
                        <Text
                          as="p"
                          className="h-[22px] bg-[url(/public/images/img_linkedin.png)] bg-cover bg-no-repeat pl-[25px] pr-0.5 !font-manrope !font-thin sm:pl-5"
                        >
                          Linkedin
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
