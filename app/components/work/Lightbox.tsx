import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CgClose } from 'react-icons/cg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.3 },
    },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2 } },
};

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose }) => {
    const [innerIndex, setInnerIndex] = useState(currentIndex);

    useEffect(() => {
        setInnerIndex(currentIndex);
    }, [currentIndex]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setInnerIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setInnerIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        variants={modalVariants}
                        exit="exit"
                        className="relative w-full h-full max-w-5xl max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={innerIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={images[innerIndex]}
                                    alt={`Vista ampliada del proyecto - Imagen ${innerIndex + 1}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="rounded-lg shadow-2xl shadow-emerald-500/20"
                                    unoptimized
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={onClose}
                        className="absolute top-5 right-5 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition-colors shadow-lg z-10"
                        aria-label="Cerrar imagen"
                    >
                        <CgClose size={28} />
                    </motion.button>

                    {images.length > 1 && (
                        <>
                            <motion.button
                                onClick={handlePrev}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition-colors shadow-lg"
                                aria-label="Imagen anterior"
                            >
                                <BsChevronLeft size={28} />
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition-colors shadow-lg"
                                aria-label="Siguiente imagen"
                            >
                                <BsChevronRight size={28} />
                            </motion.button>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
