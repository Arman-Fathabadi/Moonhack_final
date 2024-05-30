import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Header from "../../components/Header";

export default function ChatScreenPage() {
    return (
        <>
            <Helmet>
                <title>Chat with ProbE - Interactive Learning and Support</title>
                <meta
                    name="description"
                    content="Engage with ProbE's chat feature to explore relevant questions, find educational videos, and discover new features. Get answers to your curious questions with our intelligent system."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[72px] bg-blue_gray-300 pb-9 md:gap-[54px] sm:gap-9 sm:pb-5">
                {/* header section */}
                <Header className="justify-center self-stretch" />

                {/* main content section */}
                <div className="container-xs pl-[171px] pr-[201px] md:p-5 md:px-5">
                    <div className="flex flex-col items-center">
                        {/* explore section */}
                        <div className="flex w-[94%] flex-col items-center gap-9 md:w-full">
                            <Text size="6xl" as="p">
                                Explore with ProbE
                            </Text>

                            {/* examples list section */}
                            <div className="self-stretch">
                                <div className="flex gap-3.5 md:flex-col">
                                    <div className="flex w-full flex-col items-center gap-[15px]">
                                        <Img src="images/img_brightness.svg" alt="brightness image" className="h-[22px] w-[22px]" />
                                        <Text size="2xl" as="p">
                                            Examples
                                        </Text>
                                        <Button shape="round" className="w-full font-medium sm:px-5">
                                            “How big is the sun” →
                                        </Button>
                                        <Button shape="round" className="w-full font-medium leading-5">
                                            <>
                                                “How many subsets does a set
                                                <br />
                                                with 6 elements have?” →
                                            </>
                                        </Button>
                                        <Button shape="round" className="w-full font-medium sm:px-5">
                                            “Why do we Dream” →
                                        </Button>
                                    </div>
                                    <div className="flex w-full flex-col items-center gap-[15px]">
                                        <Img src="images/img_forward.svg" alt="fastforward image" className="h-[19px]" />
                                        <Text size="2xl" as="p">
                                            Capabilities
                                        </Text>
                                        <Button shape="round" className="w-full font-medium leading-5">
                                            <>
                                                Uses Wiki to find <br />
                                                most relevant questions
                                            </>
                                        </Button>
                                        <Button shape="round" className="w-full font-medium leading-5">
                                            <>
                                                Uses a special algorithm
                                                <br />
                                                to find the best Youtube video
                                            </>
                                        </Button>
                                        <Button shape="round" className="w-full font-medium leading-5">
                                            <>
                                                New features <br />
                                                coming soon!
                                            </>
                                        </Button>
                                    </div>
                                    <div className="flex w-full flex-col items-center">
                                        <Img src="images/img_video_camera.svg" alt="videocamera" className="h-[18px]" />
                                        <Text size="2xl" as="p" className="mt-3.5">
                                            Limitations
                                        </Text>
                                        <Button shape="round" className="mt-4 w-full font-medium leading-5">
                                            <>
                                                May occasionally generate
                                                <br /> Awkward Questions
                                            </>
                                        </Button>
                                        <div className="mt-[7px] self-stretch rounded-[5px] bg-blue_gray-900 pb-[22px] pt-[21px] sm:py-5">
                                            <Text size="s" as="p" className="text-center leading-5">
                                                <>
                                                    May generate way too broad <br />
                                                    of a question / topic
                                                </>
                                            </Text>
                                        </div>
                                        <Button shape="round" className="mt-[7px] w-full font-medium sm:px-5">
                                            Version 3.0
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* save image section */}
                        <div className="mt-[100px]">
                            <label>
                                <input name="myinput"/>
                            </label>
                            <button><Img src="images/new_send_icon.svg" alt="save icon" className="h-[30px] w-[30px]" /></button>
                            
                        </div>

                        {/* footer text section */}
                        <Text size="xs" as="p" className="mt-[15px] !text-white-A700">
                            ProbE is just a prototype for demonstration purpose and is not fully developed
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
}