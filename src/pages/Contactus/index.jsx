import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Button, Input, Text } from "../../components";
import Footer from "../../components/Footer";

export default function ContactusPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Share Your Feedback and Inquiries</title>
        <meta
          name="description"
          content="Reach out to us with any questions or feedback. Our contact page provides all the information you need to get in touch and start a conversation with our team."
        />
      </Helmet>

      {/* contact page section */}
      <div className="w-full bg-blue_gray-300">
        <div className="flex flex-col items-center gap-[50px]">
          {/* navigation section */}
          <div className="flex flex-col self-stretch">
            <div className="flex flex-1 justify-center bg-gray-900_01 pb-3.5 pt-[19px] md:p-5">
              <div className="container-xs flex items-start justify-between gap-5 md:flex-col">
                <Img
                  src="images/img_631644375dd15fe_44x44.png"
                  alt="navigation icon"
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

          {/* contact us header section */}
          <div className="container-xs flex flex-col items-center gap-3 px-[339px] md:p-5 md:px-5">
            <a href="#">
              <Heading size="md" as="h1" className="!font-poppins">
                Contact Us
              </Heading>
            </a>
            <Text size="3xl" as="p" className="!font-poppins">
              Any question or remarks? Just write us a message!
            </Text>
          </div>

          {/* contact form section */}
          <div className="relative h-[705px] w-[83%]">
            <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full items-start justify-center gap-[50px] rounded-[10px] bg-white-A700_01 p-2.5 shadow-xs md:relative md:flex-col">
              <div className="relative h-[647px] w-[44%] rounded-[10px] bg-black-900 pl-[39px] pt-[39px] md:w-full md:p-5 sm:pl-5 sm:pt-5">
                <div className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[183px] w-[40%] rounded-[50%] bg-gray-900_01" />
                <div className="absolute left-[8%] top-[6%] m-auto flex w-[85%] items-center sm:relative sm:flex-col">
                  <div className="relative z-[1] flex-1 sm:self-stretch">
                    <div className="flex flex-col">
                      <div className="flex flex-col items-start gap-2">
                        <Heading size="xs" as="h2" className="!font-poppins">
                          Contact Information
                        </Heading>
                        <Text size="3xl" as="p" className="!font-poppins !font-normal !text-gray-400">
                          Say something to start a live chat!
                        </Text>
                      </div>
                      <div className="mt-[108px] flex flex-col gap-12">
                        <div className="flex gap-[25px]">
                          <Img src="images/img_bxs_phone_call.svg" alt="phone icon" className="h-[24px] w-[24px]" />
                          <Text as="p" className="!font-poppins">
                            +1012 3456 789
                          </Text>
                        </div>
                        <div className="flex gap-[25px]">
                          <Img
                            src="images/img_ic_sharp_email.svg"
                            alt="email icon"
                            className="h-[24px] w-[24px] self-start"
                          />
                          <Text as="p" className="self-end !font-poppins">
                            demo@gmail.com
                          </Text>
                        </div>
                        <div className="flex items-start gap-[25px]">
                          <Img
                            src="images/img_carbon_location_filled.svg"
                            alt="location icon"
                            className="h-[24px] w-[24px]"
                          />
                          <Text as="p" className="w-[92%] !font-poppins leading-6">
                            132 Dartmouth Street Boston, Massachusetts 02156 United States
                          </Text>
                        </div>
                      </div>
                      <div className="mt-[159px] flex w-[41%] justify-between gap-5 md:w-full">
                        <Button color="gray_900_02" size="xs" shape="circle" className="w-[30px] !rounded-[15px]">
                          <Img src="images/img_trash.svg" />
                        </Button>
                        <Button color="gray_900" size="xs" shape="circle" className="w-[30px] !rounded-[15px]">
                          <Img src="images/img_group_1000001750.png" />
                        </Button>
                        <Button color="gray_900_02" size="xs" shape="circle" className="w-[30px] !rounded-[15px]">
                          <Img src="images/img_user.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-[35px] ml-[-94px] h-[138px] w-[29%] self-end rounded-[69px] bg-gray-800_7f sm:ml-0" />
                </div>
              </div>
              <div className="mt-[50px] flex w-[53%] justify-center md:w-full">
                <div className="flex w-full flex-col items-end gap-[50px]">
                  <div className="flex gap-[39px] self-stretch sm:flex-col">
                    <Input
                      shape="square"
                      type="text"
                      name="First Name Input"
                      placeholder={`First Name`}
                      className="w-full sm:w-full sm:pr-5"
                    />
                    <Input
                      shape="square"
                      type="text"
                      name="Last Name Input"
                      placeholder={`Last Name`}
                      className="w-full sm:w-full sm:pr-5"
                    />
                  </div>
                  <div className="flex gap-[39px] self-stretch sm:flex-col">
                    <Input
                      shape="square"
                      type="email"
                      name="Email Input"
                      placeholder={`Email`}
                      className="w-full sm:w-full sm:pr-5"
                    />
                    <Input
                      shape="square"
                      type="number"
                      name="Phone Input"
                      placeholder={`Phone Number`}
                      className="w-full sm:w-full sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[7px] self-stretch">
                    <Text size="xs" as="p" className="!font-poppins !text-blue_gray-400">
                      Feedback
                    </Text>
                    <Input
                      size="xs"
                      shape="square"
                      name="Feedback Input"
                      placeholder={`Write your Feedback..`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                  <Button
                    color="black_900"
                    size="sm"
                    shape="round"
                    className="min-w-[261px] font-poppins font-medium sm:px-5"
                  >
                    Send your Feedback
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="images/img_letter_send_1.png"
              alt="send icon"
              className="absolute bottom-[0.00px] right-[11%] m-auto h-[217px] w-[22%] object-cover"
            />
          </div>

          {/* footer section */}
          <div className="relative h-[364px] self-stretch md:h-auto">
            <Heading size="s" as="h2" className="mt-[52px]">
              Logo Here
            </Heading>
            <Footer className="absolute bottom-0 left-0 right-0 top-0 m-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
