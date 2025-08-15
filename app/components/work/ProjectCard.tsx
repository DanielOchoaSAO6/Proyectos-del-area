import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg, BsEye } from "react-icons/bs";

// Componente para botones de acción
const ActionButton: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?: 'primary' | 'secondary';
}> = ({ href, icon, label, variant = 'primary' }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`
          group relative rounded-full w-11 h-11 p-2.5 text-lg 
          flex items-center justify-center shadow-lg hover:shadow-xl
          transition-all duration-300 overflow-hidden
          ${variant === 'primary' 
            ? 'bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800' 
            : 'bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white border border-white/20'
        }
        `}
            >
                <span className="relative z-10 transition-transform duration-200 group-hover:scale-110">
                    {icon}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
        </motion.div>
    );
};



// Componente principal mejorado
const ProjectCard: React.FC<{ project: ProjectProps; onImageClick: (project: ProjectProps, imageUrl: string) => void }> = ({ project, onImageClick }) => {
    const { id, name, description, github, demo, image, available } = project;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        if (Array.isArray(image) && image.length > 1) {
            const timer = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
            }, 5000); // Cambia la imagen cada 5 segundos

            return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
        }
    }, [image]);

    const currentImage = Array.isArray(image) ? image[currentImageIndex] : image;

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    const handleImageError = useCallback(() => {
        setImageError(true);
        setImageLoaded(true);
    }, []);

    const cardVariants = {
        initial: { 
            opacity: 0, 
            y: 20,
            scale: 0.95
        },
        animate: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            scale: 1.02,
            y: -8,
            transition: { 
                duration: 0.4, 
                ease: "easeOut",
                type: "tween"
            }
        }
    };

    return (
        <motion.article
            layoutId={`project-card-${id}`}
            className="w-full rounded-[24px] overflow-hidden shadow-2xl group cursor-pointer bg-[rgba(255,255,255,0.08)] flex flex-col"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            role="article"
            aria-labelledby={`project-title-${id}`}
            aria-describedby={`project-description-${id}`}
        >
            {/* Image Container */}
            <div className="relative w-full aspect-video">
                {/* Action Buttons */}
                <AnimatePresence>
                    {available && (
                        <motion.div
                            className="absolute top-4 right-4 flex gap-3 z-20"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            {github && <ActionButton href={github} icon={<SiGithub />} label="GitHub" />}
                            {demo && <ActionButton href={demo} icon={<BsLink45Deg />} label="Demo" variant="secondary" />}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Status Badge */}
                <motion.div
                    className="absolute top-4 left-4 z-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
                >
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${available ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'}`}>
                        {available ? 'Disponible' : 'En desarrollo'}
                    </span>
                </motion.div>

                {/* Image Carousel */}
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={imageError ? "/placeholder.svg?height=220&width=400&text=Error" : currentImage}
                            alt={`Captura de pantalla del proyecto ${name}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            unoptimized
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent" />
                <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => onImageClick(project, currentImage)}
                >
                    <BsEye className="text-white text-5xl opacity-80" />
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex-grow flex flex-col justify-between bg-black/10">
                <div>
                    <AnimatedTitle
                        text={name}
                        className="text-2xl font-bold leading-tight text-white mb-2"
                        wordSpace="mr-[0.25em]"
                        charSpace="-mr-[0.01em]"
                    />
                    <AnimatedBody
                        className="text-sm font-medium text-gray-300 line-clamp-3 leading-relaxed"
                    >
                        {description}
                    </AnimatedBody>
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
