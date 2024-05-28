import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HomePageLandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Hi to Our Knowledge Resource - Explore and Learn</title>
        <meta
          name="description"
          content="Dive into our knowledge resource for comprehensive answers and personalized study guides across various subjects. Get the clarity and guidance you need for your academic questions."
        />
      </Helmet>
      <div className="w-full bg-blue_gray-300_01">
        {/* header section */}
        <Header className="justify-center" />

        {/* hero section */}
        <div className="mt-[38px] flex flex-col items-start gap-16 sm:gap-8">
          <div className="flex w-[95%] items-start md:w-full md:flex-col md:p-5">
            <div className="flex flex-1 flex-col items-center gap-[34px] md:self-stretch">
              <div className="container-xs md:p-5">
                <Heading as="h1" className="leading-[75px]">
                  We design experiences that will change the way you are practicing and achieve better results on exams.
                </Heading>
              </div>
              <div className="self-stretch">
                <div className="flex flex-col items-center gap-[31px]">
                  <div className="container-xs flex items-center justify-between gap-5 pr-[784px] md:p-5 md:pr-5">
                    <Button
                      size="xl"
                      shape="square"
                      rightIcon={
                        <Img
                          src="images/img_arrowleft_white_a700_01.png"
                          alt="arrow_left"
                          className="h-[63px] w-[55px]"
                        />
                      }
                      className="min-w-[184px] gap-[-1px] font-manrope font-thin text-white-A700_01"
                    >
                      Chat with ProbE
                    </Button>
                    <Button
                      color="white_A700_01"
                      size="md"
                      variant="outline"
                      shape="square"
                      className="min-w-[109px] font-manrope font-thin sm:px-5"
                    >
                      About us
                    </Button>
                  </div>
                  <Heading as="h2" className="self-start">
                    What do we do?
                  </Heading>
                  <div className="relative h-[1091px] self-stretch md:h-auto">
                    <div className="flex w-full flex-col gap-[59px] sm:gap-[29px]">
                      <Text size="5xl" as="p" className="!font-manrope leading-[75px]">
                        Welcome to our knowledge resource, your go-to destination for tackling those perplexing
                        questions and building a solid foundation of understanding! This website is more than just a
                        collection of answers; it&#39;s a dynamic learning tool tailored to your specific needs. Whether
                        you&#39;re stuck on a stubborn Mathematics problem, wrestling with the intricacies of Physics,
                        or facing a tricky question in any other subject, we&#39;re ready to provide clarity and
                        guidance.
                      </Text>
                      <Text size="5xl" as="p" className="w-[97%] !font-manrope leading-[75px] md:w-full">
                        Simply describe your question, and our intelligent system will spring into action. It carefully
                        analyzes every word, recognizing the core topic, the difficulty level, and the precise type of
                        knowledge you&#39;re seeking. We&#39;ll then embark on a focused search through our
                        comprehensive database, unearthing the most relevant sample questions and their meticulously
                        explained solutions. Consider these examples your own personalized study guide. They&#39;ll
                        illuminate different problem-solving strategies, expand your knowledge base, and boost your
                        confidence as you approach similar challenges. Let&#39;s work together to transform those
                        question marks into moments of breakthrough and mastery!
                      </Text>
                    </div>
                    <Heading as="h3" className="absolute left-[1.00px] top-[35%] m-auto">
                      How does it work?
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* about us section */}
          <div className="flex h-[794px] items-center self-stretch bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat pb-[532px] pt-10 md:h-auto md:pb-5 sm:py-5">
            <div className="flex w-[39%] flex-col items-start gap-3 pl-[57px] pr-[46px] md:w-full md:px-5">
              <Heading size="md" as="h2" className="w-full leading-[43px]">
                You can explore our group environment and learn more about us
              </Heading>
              <Button
                size="md"
                shape="square"
                rightIcon={
                  <Img src="images/img_arrowleft_white_a700_01.png" alt="arrow_left" className="h-[59px] w-[55px]" />
                }
                className="ml-24 min-w-[218px] gap-[35px] font-manrope font-extrabold text-white-A700_01 md:ml-0 sm:pl-5"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
