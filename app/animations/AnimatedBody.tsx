import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type AnimatedBodyProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedBody({
    children,
    className,
    delay,
}: AnimatedBodyProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const bodyAnimation = {
        hidden: {
            opacity: 0,
            y: `1em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                delay: delay,
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <motion.div
            className={className}
            ref={ref}
            aria-hidden="true"
            initial="hidden"
            animate={ctrls}
            variants={bodyAnimation}
        >
            {children}
        </motion.div>
    );
}
