import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorAnimation = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "transparent",
            border: "2px solid #171717", // Secondary Color (Black)
            boxShadow: "0 0 0 1px #FFC107", // Primary Color (Yellow) Outline
            height: 32,
            width: 32,
            borderRadius: "50%",
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "#171717", // Secondary Color (Black)
            border: "1px solid #FFC107", // Primary Color (Yellow) Border
            height: 8,
            width: 8,
            borderRadius: "50%",
            transition: {
                type: "spring",
                mass: 0.1
            }
        }
    };

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block">
            <motion.div
                className="fixed top-0 left-0 rounded-full"
                variants={variants}
                animate={cursorVariant}
            />
            <motion.div
                className="fixed top-0 left-0 rounded-full"
                variants={dotVariants}
                animate={cursorVariant}
            />
        </div>
    );
};

export default CursorAnimation;
