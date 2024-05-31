import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
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
        <div className="flex flex-col gap-[39px]">
          {/* team introduction section */}
          <div className="flex justify-center px-1.5 pt-1.5">
            <div className="mx-auto flex w-full max-w-[1495px] flex-col items-center">
              {/* about us heading section */}
              <Text size="xl" as="p">
                About Us
              </Text>
              <div className="mt-5 flex w-[39%] pb-[42px] md:w-full md:pb-5">
                {/* team members section */}
                <div className="flex w-full justify-center px-[26px] pt-[26px] sm:px-5 sm:pt-5">
                  <Text as="p">Meet the Team Members</Text>
                </div>
              </div>
              <div className="mt-[78px] flex items-center justify-between gap-5 self-stretch md:flex-col">
                {/* team member ahmadreza profile section */}
                <div className="flex w-[73%] items-center justify-center gap-12 md:w-full md:flex-col">
                  <div className="w-full self-start">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="relative z-[1]">
                        Ahmadreza
                      </Text>
                      <div className="relative mt-[-13px] self-stretch pb-[75px] md:pb-5">
                        <Heading as="h1" className="leading-9">
                          Ahmadreza Azizi is a key member of our project, leading the integration of artificial
                          intelligence. With his specialized skills, he ensures the project produces accurate questions
                          and insightful tutorials. He develops personalized tutorials from user queries, enhancing user
                          experience. Despite his technical role, he values ethical considerations, particularly user
                          privacy and data security. His balanced approach between technology and ethics forms a strong
                          foundation for our project.
                        </Heading>
                      </div>
                    </div>
                  </div>

                  {/* team member arman profile section */}
                  <div className="flex w-full flex-col items-start gap-5">
                    <Text as="p">Arman</Text>
                    <Heading as="h2" className="w-full leading-9">
                      Under Arman Fathabadi&#39;s leadership, the initial project phase focuses on front-end development
                      and design, which is critical as it shapes user impressions and overall experience. This includes
                      creating the landing page, our platform&#39;s virtual front door. Arman ensures it is not only
                      visually appealing but easy to navigate, effectively communicating our platform&#39;s purpose and
                      value. In addition, Arman collaborated with Kasra Sanati on the front end of the &#39;Chat
                      Screen,&#39; preparing it for the backend integration. Following this, Arman leads the development
                      of the &#39;About Us&#39; section, an opportunity to share our story, mission, values, and team,
                      fostering a connection with users.
                    </Heading>
                  </div>

                  {/* team member kasra profile section */}
                  <div className="w-full">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="relative z-[2] ml-3 md:ml-0">
                        Kasra
                      </Text>
                      <Heading as="h3" className="relative mt-[-11px] w-full leading-9">
                        <>
                          Under Kasra Sanati&#39;s guidance, we&#39;ll initially focus on developing our website&#39;s
                          front end, which significantly influences user perceptions and engagement. Kasra ensures the
                          front end, our users&#39; primary interface, is well-constructed.
                          <br />
                          We&#39;ll also develop a &#39;Contact&#39; page, enabling open communication with users, and a
                          &#39;Chat Screen&#39; page. This serves as a dynamic interface connecting users with tutorials
                          and answers, functioning as a personalized assistant. Users can input queries, and the front
                          and back end work together to provide tailored responses, enhancing the user experience.
                        </>
                      </Heading>
                    </div>
                  </div>
                </div>

                {/* team member mahdiar profile section */}
                <div className="flex w-[22%] flex-col items-start gap-1.5 md:w-full">
                  <Text as="p">Mahdiar</Text>
                  <Heading as="h4" className="w-full leading-9">
                    <>
                      Mahdiar Khodabakhshi plays a crucial role in our project, focusing on creating, managing, and
                      analyzing data structures. His work forms the platform&#39;s backbone, ensuring the efficient
                      functionality of complex algorithms. He sets up a system for quick retrieval and storage of key
                      information like user data and tutorials.
                      <br />
                      Mahdiar&#39;s analysis aids in refining AI algorithms, improving design, and enhancing user
                      experience. His data expertise offers valuable insights and solutions, extending to all aspects of
                      the project. His role and understanding of data have been instrumental in establishing a strong
                      project foundation.
                    </>
                  </Heading>
                </div>
              </div>
            </div>
          </div>

          {/* contact and socials section */}
          <div className="flex flex-col items-center justify-center bg-black-900 px-14 pb-[59px] pt-[100px] md:p-5">
            <div className="mx-auto flex w-full max-w-[1240px] items-start justify-between gap-5 pb-[30px] pt-[7px] md:flex-col sm:pb-5">
              <Text size="lg" as="p" className="w-[67%] !font-manrope leading-[43px] md:w-full">
                <span className="text-white-A700">
                  <>
                    “The important thing is not to stop questioning.
                    <br />
                     Curiosity has its own reason for existing.”
                    <br />
                  </>
                </span>
                <span className="text-2xl text-white-A700">-Einstein</span>
              </Text>
              <Button
                shape="square"
                rightIcon={<Img src="images/img_arrowleft.png" alt="arrow_left" className="h-[59px] w-[55px]" />}
                className="mt-[11px]"
              >
                Contact
              </Button>
            </div>
            <div className="mx-auto flex w-full max-w-[1242px] items-center justify-between gap-5 sm:flex-col">
              <Text size="xs" as="p" className="!font-manrope !text-blue_gray-400">
                Penta Probe © 2024
              </Text>
              <div className="flex items-start">
                <Text
                  size="s"
                  as="p"
                  className="h-[22px] bg-[url(/public/images/img_a.png)] bg-cover bg-no-repeat py-px pl-5 !font-manrope"
                >
                  Youtube
                </Text>
                <div className="flex flex-wrap gap-2.5 pb-2.5 pl-2.5">
                  <Text
                    size="s"
                    as="p"
                    className="h-[22px] bg-[url(/public/images/img_a_22x102.png)] bg-cover bg-no-repeat py-px pl-[25px] pr-1.5 !font-manrope sm:pl-5"
                  >
                    Instagram
                  </Text>
                  <Text
                    size="s"
                    as="p"
                    className="h-[22px] bg-[url(/public/images/img_a_22x86.png)] bg-cover bg-no-repeat py-px pl-[25px] pr-0.5 !font-manrope sm:pl-5"
                  >
                    Linkedin
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
