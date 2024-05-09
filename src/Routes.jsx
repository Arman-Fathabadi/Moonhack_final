import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePageLandingPage from "pages/HomePageLandingPage";
import Contactus from "pages/Contactus";
import ChatScreen from "pages/ChatScreen";
import AboutUS from "pages/AboutUS";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "homepagelandingpage",
      element: <HomePageLandingPage />,
    },
    {
      path: "contactus",
      element: <Contactus />,
    },
    {
      path: "chatscreen",
      element: <ChatScreen />,
    },
    {
      path: "aboutus",
      element: <AboutUS />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
