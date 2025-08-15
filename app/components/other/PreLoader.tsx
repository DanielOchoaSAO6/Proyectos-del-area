"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Logo from "../svg/Logo";

const PreLoader: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        // Ensure body overflow is hidden initially
        document.body.style.overflow = 'hidden';

        tl.to(".texts-container", {
            duration: 0,
            opacity: 1,
            ease: "power3.inOut",
        })
            .from(".texts-container span", {
                duration: 1.8,
                y: 70,
                skewY: 15,
                stagger: {
                    amount: 0.3
                },
                ease: "power3.inOut",
            })
            .to(".preloader", {
                duration: 1.5,
                height: "0vh",
                ease: "power3.inOut",
                delay: 0.3
            })
            .to(".preloader", {
                css: { display: "none" },
                onComplete: () => {
                    document.body.style.overflow = 'auto';
                }
            });

    }, []); // Empty dependency array to run the animation only on mount

    return (
        <div
            className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
                height: "100vh",
                width: "100%",
                background: "#000000",
                color: "#e5ebf2",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 55,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden !important",
            }}
        >
            <div
                className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-bold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                    height: "60px",
                }}
            >
                <span>Mejora Continua</span>
                <span> / </span>
               
                <span className="flex items-center justify-center gap-3 text-[#e4ded7]">
                    <span className="font-bold text-[#39d353]" style={{ textShadow: '0 0 10px rgba(57, 211, 83, 0.7)' }}>
                        SAO6
                    </span>
                    <Logo width={30} height={30} />
                </span>
                <div className="sub hidden"></div>
            </div>
        </div>
    );
};

export default PreLoader;
