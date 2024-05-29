import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import React from "react";

export default function ChatScreenPage() {
  return (
    <>
      <Helmet>
        <title>Chat Interface - Engage with ProbE's Interactive Queries</title>
        <meta
          name="description"
          content="Discover the capabilities of ProbE's chat interface. Explore relevant questions, utilize advanced algorithms for video suggestions, and stay tuned for upcoming features. Engage with a prototype designed to enhance your knowledge journey."
        />
      </Helmet>

      {/* chat screen container section */}
      <div className="flex w-full flex-col items-center justify-center bg-blue_gray-300 px-14 pb-9 pt-[156px] md:px-5 md:pt-5 sm:p-5">
        {/* chat screen main content section */}
        <div className="flex w-[55%] flex-col md:w-full">
          {/* chat screen exploration section */}
          <div className="mx-auto flex w-full max-w-[719px] flex-col items-center gap-9 md:p-5">
            <Text size="lg" as="p">
              Explore with ProbE
            </Text>

            {/* chat screen examples list section */}
            <div className="self-stretch">
              {/* chat screen examples items section */}
              <div className="flex gap-3.5 md:flex-col">
                <div className="flex w-full flex-col items-center gap-[15px]">
                  <Img
                    src="images/img_brightness.svg"
                    alt="brightness image"
                    className="h-[22px] w-[22px]"
                  />
                  <Text size="md" as="p">
                    Examples
                  </Text>
                  <Button shape="round" className="w-full sm:px-5">
                    “How big is the sun” →
                  </Button>
                  <div className="self-stretch rounded-[5px] bg-blue_gray-900 pb-3 pt-[11px]">
                    <Text as="p" className="text-center leading-5">
                      <>
                        “How many subsets does a set
                        <br />
                        with 6 elements have?” →
                      </>
                    </Text>
                  </div>
                  <Button shape="round" className="w-full sm:px-5">
                    “Why do we Dream” →
                  </Button>
                </div>

                {/* chat screen capabilities section */}
                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col items-center gap-[15px]">
                    <Img
                      src="images/img_flash.svg"
                      alt="flash image"
                      className="h-[19px]"
                    />
                    <Text size="md" as="p">
                      Capabilities
                    </Text>
                    <div className="self-stretch rounded-[5px] bg-blue_gray-900 pb-3 pt-[11px]">
                      <Text as="p" className="text-center leading-5">
                        <>
                          Uses Wiki to find <br />
                          most relevant questions
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="rounded-[5px] bg-blue_gray-900 pb-3 pt-[11px]">
                    <Text as="p" className="text-center leading-5">
                      <>
                        Uses a special algorithm
                        <br />
                        to find the best Youtube video
                      </>
                    </Text>
                  </div>
                  <Button shape="round" className="w-full leading-5">
                    <>
                      New features <br />
                      coming soon!
                    </>
                  </Button>
                </div>
                <div className="flex w-full flex-col items-center">
                  <Img
                    src="images/img_video_camera.svg"
                    alt="videocamera"
                    className="h-[18px]"
                  />
                  <Text size="md" as="p" className="mt-3.5">
                    Limitations
                  </Text>
                  <div className="mt-4 self-stretch rounded-[5px] bg-blue_gray-900 pb-3 pt-[11px]">
                    <Text as="p" className="text-center leading-5">
                      <>
                        May occasionally generate
                        <br /> Awkward Questions
                      </>
                    </Text>
                  </div>
                  <div className="mt-[7px] self-stretch rounded-[5px] bg-blue_gray-900 pb-[22px] pt-[21px] sm:py-5">
                    <Text as="p" className="text-center leading-5">
                      <>
                        May generate way too broad <br />
                        of a question / topic
                      </>
                    </Text>
                  </div>
                  <Button shape="round" className="mt-[7px] w-full sm:px-5">
                    Version 3.0
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* chat screen save image section */}
        <div className="flex flex-col items-end justify-end">
          <Img
            src="images/img_save.svg"
            alt="save icon"
            className="mt-[127px] h-[14px] w-[14px]"
          />
        </div>

        {/* chat screen disclaimer section */}
        <div className="flex flex-col items-center justify-end">
          <Text size="xs" as="p" className="mt-[30px] !text-white-A700">
            ProbE is just a prototype for demonstration purpose and is not fully
            developed
          </Text>
        </div>
      </div>
    </>
  );
}
