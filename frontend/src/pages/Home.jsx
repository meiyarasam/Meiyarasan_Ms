import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Home = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen lg:h-screen flex flex-col lg:flex-row items-stretch bg-accent relative overflow-y-auto lg:overflow-hidden">
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 px-6 sm:px-8 py-20 lg:py-0 flex flex-col justify-center relative z-10 bg-accent">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="max-w-xl mx-auto lg:mx-0 w-full flex flex-col justify-center"
                >
                    <h2 className="text-secondary font-black tracking-widest uppercase mb-2 text-sm sm:text-base">
                        Hi There!
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-6xl font-black text-secondary mb-5 leading-tight uppercase">
                        I'M <span className="text-primary bg-secondary px-3 py-1 border-[3px] border-secondary shadow-brutal-sm ml-1 select-none inline-block mt-2 lg:mt-0">MEIYARASAN S</span>
                    </h1>
                    <div className="inline-block bg-primary text-secondary border-[3px] border-secondary shadow-brutal-sm px-4 py-1.5 mb-6 text-xs sm:text-sm font-black tracking-widest uppercase self-start rounded-none">
                        AI & Data Science Student
                    </div>
                    <p className="text-secondary/80 text-base sm:text-lg mb-8 max-w-md leading-relaxed font-bold">
                        Building intelligent systems and full-stack applications with passion and precision.
                        Dedicated to solving real-world problems through code.
                    </p>
                    <button onClick={scrollToAbout} className="inline-block bg-primary text-secondary hover:bg-secondary hover:text-primary font-black px-6 py-3.5 sm:px-8 sm:py-4 border-[3px] border-secondary shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-sm transition-all self-start text-sm sm:text-base tracking-widest uppercase rounded-none">
                        MORE ABOUT ME
                    </button>
                </motion.div>
            </div>

            {/* Right Image Column (Full-bleed block containing the cover image) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden border-t-[6px] lg:border-t-0 lg:border-l-[6px] border-secondary flex-shrink-0"
            >
                <img
                    src={profileImage}
                    alt="Meiyarasan"
                    className="w-full h-full object-cover object-[center_20%] transition-all duration-700"
                />

                {/* Decorative Brutalist vertical tag */}
                <div className="absolute right-6 bottom-8 hidden lg:flex flex-col space-y-4 z-20">
                    <div className="w-6 h-24 bg-primary border-[3px] border-secondary shadow-brutal-sm"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
