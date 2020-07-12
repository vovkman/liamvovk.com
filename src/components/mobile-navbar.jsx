import React from "react";
import { Link } from "react-router-dom";

export const MobileNavbar = () => {
  const clickItem = e => {
    const item = e.target;
    if (item) {
      let content = item.parentNode.querySelector(".dropdown-content");
      if (!content) {
        content = item.parentNode.parentNode.parentNode;
      }
      if (content.clientHeight) {
        content.style.height = 0;
        content.style.marginBottom = "0";
        content.style.paddingBottom = "0";
        content.style.borderBottom = "none";
      } else {
        content.style.height = `${content.scrollHeight}px`;
        content.style.width = "100%";
        content.style.marginBottom = "1rem";
        content.style.paddingBottom = "1rem";
        content.style.borderBottom = "1px solid rgba(153, 153, 153, 0.3)";
      }
    }
  };
  return (
    <div
      className="collapse_item flex-column items-center outline-0 dn-l"
      tabIndex={1}
    >
      <div className="dropdown-content outline-0" tabIndex={2}>
        <nav className="main-nav flex-column items-center">
          {/*<div className="nav" onClick={clickItem}>*/}
          {/*  <Link to="/">ABOUT</Link>*/}
          {/*</div>*/}

          {/*<div className="nav" onClick={clickItem}>*/}
          {/*  <Link to="/work/">WORK</Link>*/}
          {/*</div>*/}

          {/*<div className="nav" onClick={clickItem}>*/}
          {/*  <Link to="/contact/">CONTACT</Link>*/}
          {/*</div>*/}
        </nav>
      </div>
      <div className="outline-0" onClick={clickItem}>
        MENU
      </div>
      <div className="heading-2 pt4">LIAM VOVK</div>
    </div>
  );
};
