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
    WorkHistoryIcon
}

    from "@hugeicons/core-free-icons";
import {
    HugeiconsIcon
}

    from "@hugeicons/react";

import React,
{
    useState
}

    from "react";
import "./home.css";
import { motion, spring } from "framer-motion";
const iconSize = 30;


export default function Home() {
    const [currentOffsetValue, setCurrentOffsetValue] = React.useState({ old: 4, new: 4 });
    const onhover = (offsetValue: number) => {
        setCurrentOffsetValue({ old: currentOffsetValue.new, new: offsetValue - 6 });
    }
    return (<div><div className="page"

    > <div className="navbar"

    > <div className="lefticon">
                <motion.div className="shadow"
                    style={{ x: currentOffsetValue.new, rotate: 0 }}
                    transformTemplate={
                        ({ x, rotate }) => `rotate(${rotate}) translateX(${x})`
                    }
                    animate={{
                        x: [currentOffsetValue.old, currentOffsetValue.new],
                        transition: { ease: ["easeIn"] }
                    }}
                >
                </motion.div>
                <div className="icon" onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => { onhover(data.currentTarget.offsetLeft); }}><HugeiconsIcon icon={
                    Home02Icon
                }

                    size={
                        iconSize
                    }

                /><span>Home</span></div> <div className="icon" onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => { onhover(data.currentTarget.offsetLeft); }}><HugeiconsIcon icon={
                    UserCircle02Icon
                }

                    size={
                        iconSize
                    }

                /> <span>About Me</span> </div> <div className="icon" onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => { onhover(data.currentTarget.offsetLeft); }}><HugeiconsIcon icon={
                    AddToListIcon
                }

                    size={
                        iconSize
                    }

                /><span>Skills</span></div> <div className="icon" onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => { onhover(data.currentTarget.offsetLeft); }}><HugeiconsIcon icon={
                    WorkHistoryIcon
                }

                    size={
                        iconSize
                    }

                /><span>Experience</span></div> <div className="icon" onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => { onhover(data.currentTarget.offsetLeft); }}><HugeiconsIcon icon={
                    RepositoryIcon
                }

                    size={
                        iconSize
                    }

                /><span>Projects</span></div> <div className="icon" onMouseEnter={(data: React.MouseEvent<HTMLDivElement>) => { onhover(data.currentTarget.offsetLeft); }}><HugeiconsIcon icon={
                    Call02Icon
                }

                    size={
                        iconSize
                    }

                /><span>Contact</span></div> </div> <div className="righticon"

                > <div className="resume"><HugeiconsIcon icon={
                    Sun03Icon
                }

                    size={
                        iconSize
                    }

                /></div> <div className="resume"><HugeiconsIcon icon={
                    Moon02Icon
                }

                    size={
                        iconSize
                    }

                /></div> <div className="resume"><HugeiconsIcon icon={
                    Pdf02Icon
                }

                    size={
                        iconSize
                    }

                /></div> </div> </div> </div> </div>)
}