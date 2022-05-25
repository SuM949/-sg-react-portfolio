import React, { useState } from "react";

const buttonSpace = {
  margin: "5px",
};

function Work({ title, videoFile, description, gitUrl, deployedUrl }) {
  function playVideo(e) {
    e.target.loop = true;
    e.target.play();
  }

  function pauseVideo(e) {
    e.target.pause();
  }

  return (
    <div className="workCard">
      <header>{title}</header>
      <div>
        <video
          onMouseOver={playVideo}
          onMouseOut={pauseVideo}
          className="video"
          src={videoFile}
          type="video/mp4"
          muted
        ></video>
      </div>
      <div>
        <p>{description}</p>
        <a href={gitUrl} target="_blank" rel="noreferrer">
          <button style={buttonSpace} className="btn btn-primary">
            Github
          </button>
        </a>
        <a href={deployedUrl} target="_blank" rel="noreferrer">
          <button style={buttonSpace} className="btn btn-primary">
            Deployed App
          </button>
        </a>
      </div>
      <footer></footer>
    </div>
  );
}

export default Work;
