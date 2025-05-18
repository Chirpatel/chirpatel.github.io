import Link from "next/link";
import React from "react";
import Dot from "./utils/dot/dot";
import "./page.scss";
const About = () => {
  return (
    <>
      <div className="page home">
        <div className="container">
          <div className="profile">
            <div className="title">
              <Dot />
              Full Stack Developer
            </div>
            <div className="work-status">Available for Work</div>
          </div>
          <div className="introduction">
            <div className="text">
              Im Chir Patel <span>Full Stack Developer from India</span>
              <span>Currently Working at BNY</span>
              <div className="redirect-btn">
                <div className="hire-me">
                  <Link href="/v1/contact">Hire Me</Link>
                </div>
              </div>
            </div>
            <div className="profile-image">Image</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
