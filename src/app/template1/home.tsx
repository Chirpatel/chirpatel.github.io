import { AddToListIcon, Call02Icon, Home02Icon, Pdf02Icon, RepositoryIcon, UserCircle02Icon, WorkHistoryIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

export default function Home() {
    return (
        <div>
            <h1>Template 1</h1>
            <p>This is the home page of Template 1.</p>
            <p>Welcome to the template!</p>
            <p>Feel free to customize it as you like.</p>
            <p>Enjoy your coding journey!</p>
            <div className="page">
                <div className="navbar">
                    <div className="left-icon">
                        <div className="home"><HugeiconsIcon icon={Home02Icon} /></div>
                        <div className="aboutme"><HugeiconsIcon icon={UserCircle02Icon} /></div>
                        <div className="skills"><HugeiconsIcon icon={AddToListIcon} /></div>
                        <div className="experience"><HugeiconsIcon icon={WorkHistoryIcon} /></div>
                        <div className="projects"><HugeiconsIcon icon={RepositoryIcon} /></div>
                        <div className="contact"><HugeiconsIcon icon={Call02Icon} /></div>
                        <div className="resume"><HugeiconsIcon icon={Pdf02Icon} /></div>
                    </div>
                    <div className="right-icon"></div>
                </div>
            </div>
        </div>
    )
}