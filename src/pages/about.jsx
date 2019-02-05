import React from "react";

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
        Engineering. My unique educational and professional background have
        afforded me the ability understand modern application architectures and
        complex data structures and algorithms. My desire for rigorous
        understanding has also made me highly effective at recognizing obscure
        bugs in code and making succint solutions.
        <br />
        <br />I have experience that ranges from stochastic control to
        implementing end to end user tracking to enable product, marketing, and
        design teams. I have also had the unique opportunity to work at a
        startup under RBC where internal system integrations with our cloud
        hosted apps are increasingly complex due to a greater need for security
        at the bank.
      </div>
    </div>
  </div>
);
