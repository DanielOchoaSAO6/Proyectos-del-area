import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Conoce al Equipo de Mejora Continua"}
                    className={
                        "mb-10 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-justify lg:text-[24px]">
                        <AnimatedBody>
                            <p>
                                Esta presentación enseña los proyectos desarrollados por el área de <span className="font-bold text-[#39d353]">Mejora Continua</span> de <span className="font-bold text-[#39d353]">Sistema Alimentador Oriental 6</span>. 
                                Nuestro equipo está conformado por <span className="font-semibold text-white">Natalia Sanchez</span>, <span className="font-semibold text-white">Daniel Ochoa</span> y <span className="font-semibold text-white">Jhonatan Usuga</span>, 
                                y juntos nos dedicamos a impulsar la <span className="font-bold text-[#39d353]">innovación</span> y la <span className="font-bold text-[#39d353]">eficiencia</span> en todas las áreas de la empresa a través de soluciones tecnológicas.
                            </p>
                        </AnimatedBody>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
