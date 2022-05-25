import React, { useEffect, useState } from "react";
import $ from 'jquery'
import "../styles/Portfolio.css";
import rightArrow from "../images/right-arrow.png";
import leftArrow from "../images/left-arrow.png";
import Work from "./Work";
import babVideo from "../images/babvideo.mp4";
import quizVideo from "../images/quizvideo.mp4";
import sunOrShowersVid from "../images/sunorshowersvideo.mp4";
import gmtbVideo from "../images/gmtbvideo.mp4";
import bootcampersVideo from "../images/bootcampersVideo.mp4";
import jateVideo from "../images/jatevideo.mp4";
import { useMediaQuery } from "react-responsive";

// Work array
const workArray = [
  {
    title: "Suma Note taker",
    description:
      "This application is used to write and save notes. It uses Express.js back end and will save and retrieve note data from a JSON file.",
    videoFile: gmtbVideo,
    gitUrl: "https://github.com/SuM949/suma-note-taker-",
    deployedUrl: "https://guarded-peak-01872.herokuapp.com/notes",
  },
  {
    title: "Weight A Minute",
    description:
      "This is gym note taker ",
    videoFile: bootcampersVideo,
    gitUrl: "https://github.com/SuM949/Weight-A-Minute",
    deployedUrl: "https://whispering-caverns-47180.herokuapp.com/signUp",
  },
  {
    title: "text editor pwa",
    description:
      "This Progressive Web Application (PWA) is a text editor that runs in the browser.",
    videoFile: jateVideo,
    gitUrl: "https://github.com/SuM949/text-editor-pwa",
    deployedUrl: "https://arcane-eyrie-88636.herokuapp.com/",
  },
  {
    title: "JavaScript Quiz",
    description:
      "Short, fun quiz on the fundamentals of JavaScript. Powered by JavaScript.",
    videoFile: quizVideo,
    gitUrl: "https://github.com/BGrowcott/bg-magical-js-quiz",
    deployedUrl: "https://bgrowcott.github.io/bg-magical-js-quiz/",
  },
  {
    title: "Birmingham Association Banquets",
    description:
      "Restaurant finder application - search any city or postcode to find nearby restaurants.",
    videoFile: babVideo,
    gitUrl: "https://github.com/oli-drew/bab-group-project-by-slackware",
    deployedUrl: "https://oli-drew.github.io/bab-group-project-by-slackware/",
  },
  {
    title: "Sun or Showers",
    description:
      "A Weather app - search any city worldwide for a 5 day forecast - uses OpenWeather API",
    videoFile: sunOrShowersVid,
    gitUrl: "https://github.com/BGrowcott/bg-sun-or-showers",
    deployedUrl: "https://bgrowcott.github.io/bg-sun-or-showers/",
  },
];



function Portfolio() {

  let [increments, setIncrements] = useState(3)
  let [startPoint, setStartPoint] = useState(0);
  const [initialWorks, setWorks] = useState(
    workArray.slice(startPoint, startPoint + increments)
  );

  const isSmallScreen = useMediaQuery({query: '(max-width: 768px)'})

  useEffect(() => {
    if (isSmallScreen) {
      console.log('test')
      setIncrements(1) 
      setWorks(workArray.slice(startPoint, startPoint + increments))
    }
  }, [increments])

  function nextWorks() {
    if (isSmallScreen) {setIncrements(1)} else {setIncrements(3)}
    $('#myWork').css({'opacity': '0', 'transition': 'all 0.5s'})
    setTimeout(()=>{
    setStartPoint((startPoint += increments));
    setWorks(workArray.slice(startPoint, startPoint + increments));
    $('#myWork').css({'opacity': '1', 'transition': 'all 0.5s'})
   }, 500)
  }

  function previousWorks() {
    if (isSmallScreen) {setIncrements(1)} else {setIncrements(3)}
    $('#myWork').css({'opacity': '0', 'transition': 'all 0.5s linear'})
    setTimeout(()=>{
    setStartPoint((startPoint -= increments));
    setWorks(workArray.slice(startPoint, startPoint + increments));
    $('#myWork').css({'opacity': '1', 'transition': 'all 0.5s linear'})
   }, 500)
  }

  return (
    <section>
      <div id="myWorkContainer">
        <button
          className="workNav btn"
          id="workNavLeft"
          onClick={previousWorks}
          disabled={startPoint === 0}
        >
          <img src={leftArrow} />
        </button>

        <div id="myWork">
          {initialWorks.map((work, index) => (
            <Work
              key={index}
              title={work.title}
              videoFile={work.videoFile}
              description={work.description}
              gitUrl={work.gitUrl}
              deployedUrl={work.deployedUrl}
            />
          ))}
        </div>

        <button
          className="btn workNav"
          id="workNavRight"
          onClick={nextWorks}
          disabled={startPoint === workArray.length - increments}
        >
          <img src={rightArrow} />
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
