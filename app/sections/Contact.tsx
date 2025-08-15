import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            <ContactBackground />
            <div className="mx-auto flex w-full flex-col items-center justify-center px-4 pt-10 sm:px-6 md:pt-0 lg:px-8">
                <div
                    className={`flex w-full flex-col items-center justify-center ${inter.className} relative`}
                >
                    <h1 className="text-center text-[40px] font-extrabold uppercase leading-none text-[#e4ded7] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">
                        MUCHAS GRACIAS<br />POR VER
                    </h1>
                </div>

                <div className="mt-20 flex w-full flex-col items-center justify-center gap-12 text-center sm:mt-32 md:mt-40 lg:mt-12">
                    <AnimatedBody
                        className="w-full max-w-lg text-[14px] font-semibold uppercase text-[#e4ded7] md:text-[16px]"
                    >
                        Esta presentación fue creada con dedicación por el equipo de Mejora Continua.
                    </AnimatedBody>

                    <div className="flex w-full flex-col items-center justify-center gap-8 text-[16px] font-bold text-[#e4ded7] sm:flex-row sm:gap-14 md:gap-16 lg:gap-20">
                        <Link
                            href="https://www.linkedin.com/in/natalia-sanchez-b56999249/"
                            target="_blank"
                            aria-label="Perfil de LinkedIn de Natalia Sanchez"
                        >
                            <AnimatedTitle
                                text={"NATALIA"}
                                className={
                                    "text-center text-[16px] font-bold text-[#e4ded7] lg:text-[20px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/daniel-ochoa-0a6b89239/"
                            target="_blank"
                            aria-label="Perfil de LinkedIn de Daniel Ochoa"
                        >
                            <AnimatedTitle
                                text={"DANIEL"}
                                className={
                                    "text-center text-[16px] font-bold text-[#e4ded7] lg:text-[20px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/jhonatan-usuga-a41351249/"
                            target="_blank"
                            aria-label="Perfil de LinkedIn de Jhonatan Usuga"
                        >
                            <AnimatedTitle
                                text={"JHONATAN"}
                                className={
                                    "text-center text-[16px] font-bold text-[#e4ded7] lg:text-[20px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
