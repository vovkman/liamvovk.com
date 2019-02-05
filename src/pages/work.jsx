import React from "react";
import { Route } from "react-router-dom";
import { Project } from "../components/project";

export const Work = ({ match }) => {
  return (
    <div>
      <Route path={`${match.url}/:project`} render={Project} />
      <div className="work-tiles flex-row flex-wrap justify-between pt7 pt5-nl">
        {createTiles()}
        <div className="tile-empty" />
      </div>
    </div>
  );
};

const Tile = ({ src, alt, route, css }) => (
  <div className="tile flex-column justify-center pointer">
    <a href={route} className="outline-0 flex-column h100 justify-center">
      <img
        className={`tile-img mw100 self-center ${css}`}
        src={src}
        alt={alt}
      />
    </a>
  </div>
);

// gighub, ownr, fourth year thesis, azure iac, carnival site, this website,
const imgs = [
  {
    src: "/gighub.jpg",
    alt: "GigHub",
    route: "/#/work/gighub",
    css: "gighub"
  },
  {
    src: "/ownr.svg",
    alt: "Ownr",
    route: "/#/work/ownr",
    css: "ownr"
  },
  {
    src: "/camera.svg",
    alt: "Camera Core Logging",
    route: "/#/work/automated_core_logging",
    css: "core"
  },
  {
    src: "/liamvovk.png",
    alt: "Liam Vovk Website",
    route: "/#/work/personal_site",
    css: "site"
  }
];

const createTiles = () =>
  imgs.map((img, key) => (
    <Tile
      key={key}
      src={img.src}
      alt={img.alt}
      route={img.route}
      css={img.css}
    />
  ));
