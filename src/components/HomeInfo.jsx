import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div
    className="sm:text-xl sm:leading-snug text-center bg-white
  py-4 px-8 text-blue-700 mx-5 shadow-cardhover rounded-xl sm:w-1/2 w-full"
  >
    <p className="sm:text-xl text-center mb-4">{text}</p>
    <Link
      className="transition-colors duration-300 ease-in-out bg-gradient-to-r from-[#00c6ff] to-[#0072ff] font-medium 
     hover:from-[#0095ff] hover:to-[#0048ff] w-full text-white px-4 py-2 mx-2 rounded-md"
      to={link}
    >
      {btnText}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center bg-white
        py-4 px-8 text-blue-700 mx-5 shadow-cardhover rounded-xl"
    >
      Hi, I am <span className="font-semibold">Liubov</span> 👋
      <br />A Full-stack Developer based in Berlin
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="About projects"
      link="/projects"
      btnText="Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="contacts"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
