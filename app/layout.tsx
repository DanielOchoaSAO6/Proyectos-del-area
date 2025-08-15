import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';

const ClientSidePreLoader = dynamic(() => import('./components/other/PreLoader'), {
    ssr: false,
});

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "Proyectos Mejora Continua",
    description:
    "Proyectos Mejora Continua",
    generator: "Next.js",
    applicationName: "Proyectos Mejora Continua",
    keywords: [
        "Portfolio template",
        "Eldora UI",
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Proyectos Mejora Continua",
        description:
      "Proyectos Mejora Continua",
        url: "https://www.eldoraui.site/",
        siteName: "www.eldoraui.site",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Proyectos Mejora Continua",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Proyectos Mejora Continua",
        description:
      "Proyectos Mejora Continua",
        creator: "@karthikmudunuri",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                <ClientSidePreLoader />
                {children}
            </body>
        </html>
    );
}
