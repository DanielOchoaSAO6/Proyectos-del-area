import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";


const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                >                 
                    <AnimatedTitle
                        text={"Proyectos del Área"}
                        className={
                            "mb-2 text-center text-[50px] font-bold leading-none tracking-tighter text-[#e4ded7] sm:text-[60px] md:text-[70px] lg:text-[90px]"
                        }
                        wordSpace={"mr-[14px]"}
                        charSpace={"mr-[0.001em]"}
                    />
                    <AnimatedTitle
                        text={"Mejora Continua"}
                        className={
                            "text-center text-[24px] font-medium tracking-tight text-[#39d353] sm:text-[28px] md:text-[32px] lg:text-[40px]"
                        }
                        wordSpace={"mr-[8px]"}
                        charSpace={"mr-[0.001em]"}
                    />                  
                </div>
                
            </div>
        </motion.section>
    );
};

export default Hero;
