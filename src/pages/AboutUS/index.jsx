import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
import React from "react";

export default function AboutUSPage() {
  return (
    <>
      <Helmet>
        <title>About Our Team - Meet the Experts Behind Our Project</title>
        <meta
          name="description"
          content="Discover the dedicated team members driving our project's success. Meet Ahmadreza, the AI integration leader, Arman, the front-end visionary, Kasra, the user experience enhancer, and Mahdiar, the data structure analyst. Join us on our mission to deliver personalized tutorials and enhance user experience."
        />
      </Helmet>

      {/* about us container section */}
      <div className="w-full bg-blue_gray-300 pt-[83px] md:pt-5">
        <div className="flex flex-col gap-[39px] items-center">
          {/* about us heading section */}
          <Text size="xl" as="p" className="mt-5 text-4xl font-bold">
            About Us
          </Text>
          <Text as="p" className="mt-2 text-xl">
            Meet the Team Members
          </Text>

          <div className="mt-[78px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* team member ahmadreza profile section */}
            <div className="flex flex-col items-start">
              <Text as="p" className="font-bold text-lg">
                Ahmadreza
              </Text>
              <Text as="p" className="mt-2">
                Ahmadreza Azizi is a key member...
              </Text>
            </div>

            {/* team member arman profile section */}
            <div className="flex flex-col items-start">
              <Text as="p" className="font-bold text-lg">
                Arman
              </Text>
              <Text as="p" className="mt-2">
                Under Arman Fathabadi's leadership...
              </Text>
            </div>

            {/* team member kasra profile section */}
            <div className="flex flex-col items-start">
              <Text as="p" className="font-bold text-lg">
                Kasra
              </Text>
              <Text as="p" className="mt-2">
                Under Kasra Sanati's guidance...
              </Text>
            </div>

            {/* team member mahdiar profile section */}
            <div className="flex flex-col items-start">
              <Text as="p" className="font-bold text-lg">
                Mahdiar
              </Text>
              <Text as="p" className="mt-2">
                Mahdiar Khodabakhshi plays a crucial role...
              </Text>
            </div>
          </div>

          <div className="mt-16 bg-black text-white w-full py-8">
            <div className="text-center">
              <Text as="p" className="text-lg italic">
                "The important thing is not to stop questioning. Curiosity has
                its own reason for existing."
              </Text>
              <Text as="p" className="mt-4">
                -Einstein
              </Text>
              <Button
                shape="square"
                rightIcon={
                  <Img
                    src="/images/img_arrowleft.png"
                    alt="arrow_left"
                    className="h-[59px] w-[55px]"
                  />
                }
                className="mt-4"
              >
                Contact
              </Button>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <Text as="p">Penta Probe © 2024</Text>
              <div className="flex space-x-4">
                <Text
                  as="p"
                  className="bg-[url('/public/images/img_a.png')] bg-cover bg-no-repeat py-px pl-5"
                >
                  Youtube
                </Text>
                <Text
                  as="p"
                  className="bg-[url('/public/images/img_a_22x102.png')] bg-cover bg-no-repeat py-px pl-[25px] pr-1.5"
                >
                  Instagram
                </Text>
                <Text
                  as="p"
                  className="bg-[url('/public/images/img_a_22x86.png')] bg-cover bg-no-repeat py-px pl-[25px] pr-0.5"
                >
                  Linkedin
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}