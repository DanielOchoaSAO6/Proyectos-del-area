"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import { areas } from "../components/work/projectDetails";
import React from "react";

const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href.split("#")[1];
        const element = document.getElementById(href);
        if (element) {
            // Ajustar para el navbar fijo (aproximadamente 100px de offset)
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
                top: Math.max(0, offsetTop),
                left: 0,
                behavior: "smooth",
            });
        }
    };

    // Generar enlaces dinámicamente desde las áreas definidas
    const navLinks = areas.map(area => ({
        href: `#${area.id}`,
        label: area.name === "Recursos Humanos" ? "RRHH" : area.name
    }));

    return (
        <nav className="nowrap fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] md:p-2">
            <Container
                width="auto"
                height="50px"
                color="rgba(255, 255, 255, 0.1)"
                borderRadius={10}
                top="0px"
                left="0px"
                angle={0}
            >
                <nav className="nowrap z-50 flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] md:p-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label={`Scroll to ${link.label} Section`}
                        >
                            <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                                {link.label.toUpperCase()}
                            </h4>
                        </Link>
                    ))}
                </nav>
            </Container>
        </nav>
    );
};

export default NavBar;
