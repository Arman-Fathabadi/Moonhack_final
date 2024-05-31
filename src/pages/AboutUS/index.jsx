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

      <div className="w-full bg-gray-900 text-white py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-2xl">Meet the Team Members</p>
        </div>
        <div className="flex flex-wrap justify-around gap-8">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h2 className="text-3xl font-bold mb-2">Ahmadreza</h2>
            <p className="text-lg leading-relaxed">
              Ahmadreza Azizi is a key member of our project, leading the
              integration of artificial intelligence. With his specialized
              skills, he ensures the project produces accurate questions and
              insightful tutorials. He develops personalized tutorials from user
              queries, enhancing user experience. Despite his technical role, he
              values ethical considerations, particularly user privacy and data
              security. His balanced approach between technology and ethics
              forms a strong foundation for our project.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h2 className="text-3xl font-bold mb-2">Arman</h2>
            <p className="text-lg leading-relaxed">
              Under Arman Fathabadi's leadership, the initial project phase
              focuses on front-end development and design, which is critical as
              it shapes user impressions and overall experience. This includes
              creating the landing page, our platform's virtual front door.
              Arman ensures it is not only visually appealing but easy to
              navigate, effectively communicating our platform's purpose and
              value. In addition, Arman collaborated with Kasra Sanati on the
              front end of the 'Chat Screen,' preparing it for the backend
              integration. Following this, Arman leads the development of the
              'About Us' section, an opportunity to share our story, mission,
              values, and team, fostering a connection with users.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h2 className="text-3xl font-bold mb-2">Kasra</h2>
            <p className="text-lg leading-relaxed">
              Under Kasra Sanati's guidance, we'll initially focus on developing
              our website's front end, which significantly influences user
              perceptions and engagement. Kasra ensures the front end, our
              users' primary interface, is well-constructed. We'll also develop
              a 'Contact' page, enabling open communication with users, and a
              'Chat Screen' page. This serves as a dynamic interface connecting
              users with tutorials and answers, functioning as a personalized
              assistant. Users can input queries, and the front and back end
              work together to provide tailored responses, enhancing the user
              experience.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h2 className="text-3xl font-bold mb-2">Mahdiar</h2>
            <p className="text-lg leading-relaxed">
              Mahdiar Khodabakhshi plays a crucial role in our project, focusing
              on creating, managing, and analyzing data structures. His work
              forms the platform's backbone, ensuring the efficient
              functionality of complex algorithms. He sets up a system for quick
              retrieval and storage of key information like user data and
              tutorials. Mahdiar's analysis aids in refining AI algorithms,
              improving design, and enhancing user experience. His data
              expertise offers valuable insights and solutions, extending to all
              aspects of the project. His role and understanding of data have
              been instrumental in establishing a strong project foundation.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="italic text-xl">
            "The important thing is not to stop questioning. Curiosity has its
            own reason for existing." - Einstein
          </p>
          <Button
            shape="square"
            rightIcon={
              <Img
                src="images/img_arrowleft.png"
                alt="arrow_left"
                className="h-6 w-6"
              />
            }
            className="mt-8"
          >
            Contact
          </Button>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">Penta Probe © 2024</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-sm underline">
              YouTube
            </a>
            <a href="#" className="text-sm underline">
              Instagram
            </a>
            <a href="#" className="text-sm underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}