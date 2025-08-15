"use client";
import React from "react";
import { useEffectOnce } from 'usehooks-ts';

import dynamic from 'next/dynamic';

const PreLoader = dynamic(() => import('./components/other/PreLoader'), { ssr: false });
import useBlobity from "./components/blobity/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {


    useEffectOnce(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    });

    useBlobity(
        {
            licenseKey: "opensource",
            focusableElementsOffsetX: 4,
            focusableElementsOffsetY: 4,
            color: "#ffffff",
            dotColor: "#ffffff",
            invert: true,
            focusableElements:
                "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
            font: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 900,
            opacity: 1.0,
            fontColor: "#ffffff",
            zIndex: 35,
            size: 50,
            radius: 5,
            magnetic: false,
        }
    );

    return (
        <>
            <PreLoader />
            <Blur />
            <Color />
            <NavBar />
            <main
                className="flex flex-col items-center justify-center bg-black"
            >
                <Hero />
                <About />
                <Work />
                <Contact />
                <Footer />
            </main>
            
        </>
    );
}
