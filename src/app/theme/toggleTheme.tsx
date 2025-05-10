"use client";
import { useState, useEffect } from "react";

export function ToggleTheme() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.style.setProperty('--color-primary', '#212121');
            root.style.setProperty('--color-secondary', '#E8F9FF');
            root.style.setProperty('--color-third', '#C4D9FF');
            root.style.setProperty('--color-fourth', '#766cab');
            root.style.setProperty('--color-hover-background', '#FBFBFB');
            root.style.setProperty('--color-hover-text', '#161616');
            root.style.setProperty('--color-background', '#161616');
            root.style.setProperty('--color-text', '#FBFBFB');
            root.style.setProperty('--color-border', '#E0E0E0');
            root.style.setProperty('--color-shadow', '#b5b3b3');
        } else {
            root.style.setProperty('--color-primary', '#FBFBFB');
            root.style.setProperty('--color-secondary', '#E8F9FF');
            root.style.setProperty('--color-third', '#C4D9FF');
            root.style.setProperty('--color-fourth', '#C5BAFF');
            root.style.setProperty('--color-hover-background', '#000000');
            root.style.setProperty('--color-hover-text', '#ebe8e8');
            root.style.setProperty('--color-background', '#ebe8e8');
            root.style.setProperty('--color-text', '#000000');
            root.style.setProperty('--color-border', '#E0E0E0');
            root.style.setProperty('--color-shadow', '#b5b3b3');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    return toggleTheme;
}
