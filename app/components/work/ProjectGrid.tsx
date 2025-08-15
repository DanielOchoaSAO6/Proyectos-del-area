import ProjectCard from "./ProjectCard";
import { projects, ProjectProps, areas } from "./projectDetails";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Lightbox from './Lightbox';
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface CarouselHookReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  activeIndex: number;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollTo: (direction: 'left' | 'right') => void;
  scrollToIndex: (index: number) => void;
}

// Hook del carrusel optimizado
const useCarousel = (itemCount: number): CarouselHookReturn => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(itemCount > 1);

    const updateScrollState = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        const maxScroll = scrollWidth - clientWidth;
    
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < maxScroll - 10);
    }, []);

    const scrollTo = useCallback((direction: 'left' | 'right') => {
        const container = containerRef.current;
        if (!container) return;

        const containerWidth = container.clientWidth;
        const cardWidth = container.querySelector('.project-card')?.clientWidth || 0;
        const gap = 32;
        const scrollAmount = cardWidth + gap;

        const newScrollLeft = direction === 'left' 
            ? Math.max(0, container.scrollLeft - scrollAmount)
            : Math.min(container.scrollWidth - containerWidth, container.scrollLeft + scrollAmount);

        container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
    }, []);

    const scrollToIndex = useCallback((index: number) => {
        const container = containerRef.current;
        if (!container || index < 0 || index >= itemCount) return;

        const cardWidth = container.querySelector('.project-card')?.clientWidth || 0;
        const gap = 32;
        const scrollAmount = (cardWidth + gap) * index;

        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, [itemCount]);

    // Intersection Observer para detectar elemento activo
    useEffect(() => {
        const container = containerRef.current;
        if (!container || itemCount === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);

                if (visibleEntries.length > 0) {
                    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;

                    let closestEntry = visibleEntries[0];
                    let minDistance = Infinity;

                    visibleEntries.forEach((entry) => {
                        const entryCenter = entry.boundingClientRect.left + entry.boundingClientRect.width / 2;
                        const distance = Math.abs(containerCenter - entryCenter);
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestEntry = entry;
                        }
                    });

                    const targetElement = closestEntry.target as HTMLElement;
                    const indexStr = targetElement.dataset.index;
                    if (indexStr) {
                        const index = parseInt(indexStr, 10);
                        setActiveIndex(index);
                    }
                }
            },
            {
                root: container,
                threshold: [0, 0.25, 0.5, 0.75, 1],
                rootMargin: '0px -15% 0px -15%'
            }
        );

        const cards = container.querySelectorAll('.project-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [itemCount, activeIndex]);





    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let timeoutId: NodeJS.Timeout;
        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateScrollState, 150);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        updateScrollState();

        return () => {
            container.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [updateScrollState]);

    return {
        containerRef,
        activeIndex,
        canScrollLeft,
        canScrollRight,
        scrollTo,
        scrollToIndex
    };
};

// Componente de navegación
const CarouselNavigation: React.FC<{
  onScrollLeft: () => void;
  onScrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  isVisible: boolean;
}> = ({ onScrollLeft, onScrollRight, canScrollLeft, canScrollRight, isVisible }) => {
    if (!isVisible) return null;

    return (
        <>
            <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                    opacity: canScrollLeft ? 1 : 0.4, 
                    x: 0,
                    scale: canScrollLeft ? 1 : 0.95 
                }}
                transition={{ duration: 0.2 }}
                onClick={onScrollLeft}
                disabled={!canScrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-200 disabled:cursor-not-allowed shadow-lg"
                aria-label="Proyecto anterior"
            >
                <BsChevronLeft size={18} />
            </motion.button>

            <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                    opacity: canScrollRight ? 1 : 0.4, 
                    x: 0,
                    scale: canScrollRight ? 1 : 0.95 
                }}
                transition={{ duration: 0.2 }}
                onClick={onScrollRight}
                disabled={!canScrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-200 disabled:cursor-not-allowed shadow-lg"
                aria-label="Siguiente proyecto"
            >
                <BsChevronRight size={18} />
            </motion.button>
        </>
    );
};

// Componente de indicadores
const CarouselIndicators: React.FC<{
  total: number;
  activeIndex: number;
  onIndicatorClick: (index: number) => void;
}> = ({ total, activeIndex, onIndicatorClick }) => {
    if (total <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-1.5 mt-4">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onIndicatorClick(index)}
                    className="p-1.5 transition-transform hover:scale-110"
                    aria-label={`Ir al proyecto ${index + 1}`}
                >
                    <div
                        className={`rounded-full transition-all duration-300 ${
                            index === activeIndex 
                                ? 'bg-white w-5 h-1.5' 
                                : 'bg-white/40 hover:bg-white/60 w-1.5 h-1.5'
                        }`}
                    />
                </button>
            ))}
        </div>
    );
};

// Componente de área de proyecto
const ProjectArea: React.FC<{
  area: { id: string; name: string };
  projects: ProjectProps[];
  index: number;
  onImageClick: (project: ProjectProps, imageUrl: string) => void;
}> = ({ area, projects, index, onImageClick }) => {
    const [showNavigation, setShowNavigation] = useState(false);
  
    const {
        containerRef,
        activeIndex,
        canScrollLeft,
        canScrollRight,
        scrollTo,
        scrollToIndex
    } = useCarousel(projects.length);

    const hasMultipleProjects = projects.length > 1;

    return (
        <motion.section
            id={area.id}
            className="w-full scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            {/* Encabezado del área */}
            <header className="mb-12 lg:mb-16 text-center">
                <motion.div 
                    className="inline-block relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-emerald-500/20 blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-green-500/20 blur-xl"></div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text mb-4 tracking-tight">
                        {area.name}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 rounded-full mx-auto shadow-lg shadow-emerald-500/30"></div>
                </motion.div>
                <motion.p 
                    className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mx-auto mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                    
                </motion.p>
            </header>

            {/* Contenedor de proyectos */}
            <div 
                className="relative"
                onMouseEnter={() => hasMultipleProjects && setShowNavigation(true)}
                onMouseLeave={() => setShowNavigation(false)}
            >
                {/* Botones de navegación */}
                <CarouselNavigation
                    onScrollLeft={() => scrollTo('left')}
                    onScrollRight={() => scrollTo('right')}
                    canScrollLeft={canScrollLeft}
                    canScrollRight={canScrollRight}
                    isVisible={showNavigation && hasMultipleProjects}
                />

                {/* Carrusel de proyectos */}
                <div
                    ref={containerRef}
                    className="carousel-container flex items-center gap-8 overflow-x-auto py-6"
                    role="region"
                    aria-label={`Proyectos de ${area.name}`}
                >
                    {projects.map((project, projectIndex) => (
                        <motion.div
                            key={project.id}
                            className="project-card flex-shrink-0"
                            data-index={projectIndex}
                            animate={{
                                scale: activeIndex === projectIndex ? 1 : 0.92,
                                opacity: activeIndex === projectIndex ? 1 : 0.75,
                                y: activeIndex === projectIndex ? -2 : 0,
                            }}
                            transition={{ 
                                duration: 0.4, 
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <ProjectCard
                                project={project}
                                onImageClick={onImageClick}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Indicadores */}
                <CarouselIndicators
                    total={projects.length}
                    activeIndex={activeIndex}
                    onIndicatorClick={scrollToIndex}
                />
            </div>
        </motion.section>
    );
};

// Componente principal
const ProjectGrid: React.FC = () => {
    const [lightboxData, setLightboxData] = useState<{ images: string[]; currentIndex: number } | null>(null);

    const openLightbox = (project: ProjectProps, clickedImage: string) => {
        const images = Array.isArray(project.image) ? project.image : [project.image];
        const currentIndex = images.indexOf(clickedImage);
        setLightboxData({ images, currentIndex: currentIndex !== -1 ? currentIndex : 0 });
    };

    const closeLightbox = () => {
        setLightboxData(null);
    };
    return (
        <div className="w-full">
            {/* Encabezado principal */}
            <motion.header 
                className="mb-16 md:mb-20 lg:mb-24 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="relative inline-block">
                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-emerald-500/10 blur-2xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-green-500/10 blur-2xl"></div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text mb-6 tracking-tight">
            Áreas
                    </h1>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 rounded-full mx-auto shadow-lg shadow-emerald-500/50"></div>
                </div>
            </motion.header>

            {/* Áreas de proyectos */}
            <div className="w-full space-y-20 lg:space-y-28">
                {areas.map((area, index) => {
                    const areaProjects = projects.filter(project => project.area === area.id);
          
                    if (areaProjects.length === 0) return null;
          
                    return (
                        <ProjectArea
                            key={area.id}
                            area={area}
                            projects={areaProjects}
                            index={index}
                            onImageClick={openLightbox}
                        />
                    );
                })}
            </div>

            <style jsx global>{`
        .carousel-container {
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-left: max(1.5rem, calc(50% - 280px));
          padding-right: max(1.5rem, calc(50% - 280px));
        }
        
        .carousel-container::-webkit-scrollbar {
          display: none;
        }
        
        .project-card {
          scroll-snap-align: center;
          width: 560px;
          min-width: 560px;
        }
        
        @media (max-width: 1200px) {
          .project-card {
            width: 480px;
            min-width: 480px;
          }
          .carousel-container {
            gap: 1.5rem;
            padding-left: max(1rem, calc(50% - 240px));
            padding-right: max(1rem, calc(50% - 240px));
          }
        }
        
        @media (max-width: 900px) {
          .project-card {
            width: 380px;
            min-width: 380px;
          }
          .carousel-container {
            gap: 1rem;
            padding-left: max(1rem, calc(50% - 190px));
            padding-right: max(1rem, calc(50% - 190px));
          }
        }
        
        @media (max-width: 640px) {
          .project-card {
            width: calc(100vw - 2.5rem);
            min-width: calc(100vw - 2.5rem);
            max-width: 320px;
          }
          .carousel-container {
            gap: 0.75rem;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
        }
      `}</style>
            <Lightbox
                images={lightboxData?.images ?? []}
                currentIndex={lightboxData?.currentIndex ?? 0}
                onClose={closeLightbox}
                isOpen={!!lightboxData}
            />
        </div>
    );
};

export default ProjectGrid;
