"use client";

import {
  AddToListIcon,
  Call02Icon,
  Home02Icon,
  Moon02Icon,
  Pdf02Icon,
  RepositoryIcon,
  Sun03Icon,
  UserCircle02Icon,
  WorkHistoryIcon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";

import React from "react";
import "./navbar.scss";

import { motion } from "framer-motion";

import { ToggleTheme } from "../../theme/toggleTheme";
import Link from "next/link";
const iconSize = 30;
import { usePathname } from "next/navigation";
export default function Home() {
  const path = usePathname();
  console.log(path);
  const currentState: { [others: string]: number } = {
    "/v1": 4,
    "/v1/about": 54,
    "/v1/skills": 104,
    "/v1/experience": 154,
    "/v1/projects": 204,
    "/v1/contact": 254,
  };
  const [currentOffsetValue, setCurrentOffsetValue] = React.useState({
    old: currentState[path] || 4,
    new: currentState[path] || 4,
  });

  const onhover = (offsetValue: number) => {
    setCurrentOffsetValue({
      old: currentOffsetValue.new,
      new: offsetValue - 6,
    });
  };

  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleThemeFunc1 = ToggleTheme();

  const toggleThemeFunc = () => {
    setIsDarkMode(!isDarkMode);
    toggleThemeFunc1();
  };

  return (
    <div>
      <div className="page">
        <nav>
          <div className="navbar">
            <div
              className="lefticon"
              onMouseLeave={() => {
                onhover((currentState[path] || 4) + 6);
              }}
            >
              <motion.div
                className="shadow"
                style={{
                  x: currentOffsetValue.new,
                  rotate: 0,
                }}
                transformTemplate={({ x, rotate }) =>
                  `rotate(${rotate}) translateX(${x})`
                }
                animate={{
                  x: [currentOffsetValue.old, currentOffsetValue.new],
                  transition: {
                    ease: ["easeIn"],
                  },
                }}
              ></motion.div>
              <Link href="/v1">
                <div
                  className="icon"
                  onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => {
                    onhover(data.currentTarget.offsetLeft);
                  }}
                >
                  <HugeiconsIcon icon={Home02Icon} size={iconSize} />
                  <span>Home</span>
                </div>
              </Link>
              <Link href="/v1/about">
                <div
                  className="icon"
                  onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => {
                    onhover(data.currentTarget.offsetLeft);
                  }}
                >
                  <HugeiconsIcon icon={UserCircle02Icon} size={iconSize} />
                  <span>About Me</span>
                </div>
              </Link>
              <Link href="/v1/skills">
                <div
                  className="icon"
                  onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => {
                    onhover(data.currentTarget.offsetLeft);
                  }}
                >
                  <HugeiconsIcon icon={AddToListIcon} size={iconSize} />
                  <span>Skills</span>
                </div>
              </Link>
              <Link href="/v1/experience">
                <div
                  className="icon"
                  onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => {
                    onhover(data.currentTarget.offsetLeft);
                  }}
                >
                  <HugeiconsIcon icon={WorkHistoryIcon} size={iconSize} />
                  <span>Experience</span>
                </div>
              </Link>
              <Link href="/v1/projects">
                <div
                  className="icon"
                  onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => {
                    onhover(data.currentTarget.offsetLeft);
                  }}
                >
                  <HugeiconsIcon icon={RepositoryIcon} size={iconSize} />
                  <span>Projects</span>
                </div>
              </Link>
              <Link href="/v1/contact">
                <div
                  className="icon"
                  onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => {
                    onhover(data.currentTarget.offsetLeft);
                  }}
                >
                  <HugeiconsIcon icon={Call02Icon} size={iconSize} />
                  <span>Contact</span>
                </div>
              </Link>
            </div>

            <div className="righticon">
              <div className="icon">
                <button type="button" onClick={() => toggleThemeFunc()}>
                  <HugeiconsIcon
                    icon={isDarkMode ? Moon02Icon : Sun03Icon}
                    size={iconSize}
                  />
                </button>
                <span> {isDarkMode ? "Light Mode" : "Dark Mode"}</span>
              </div>
              <div className="icon">
                <button type="button">
                  <HugeiconsIcon icon={Pdf02Icon} size={iconSize} />
                </button>
                <span>Resume</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
