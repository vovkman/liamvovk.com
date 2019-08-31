import React from 'react';

export const About = () => (
  <div className="about flex-row flex-column-nxl pt6">
    <img
      className="medium-img large-image-nxl flip-img self-start self-center-nxl"
      src="/taranaki-full.jpg"
      alt="Mount Taranaki"
    />
    <div className="flex-column pl7 pl0-nxl pt4-nxl">
      <div className="heading-3 pb2">ABOUT</div>
      <div className="paragraph-3">
        I am a developer for RBC Ventures with a degree in Mathematics and
        Engineering. I love to optimize code and learn new languages! Currently
        diving into functional programming. Check out my GitHub for my latest
        projects.
        <br />
      </div>
    </div>
  </div>
);
