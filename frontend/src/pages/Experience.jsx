import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaTimes } from 'react-icons/fa';

const Tilt = ({ children, className }) => {
    const ref = useRef(null);
    const [tiltStyle, setTiltStyle] = useState({});

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        
        // Calculate rotation degrees (max 10 degrees)
        const rX = (mouseY / (height / 2)) * -10;
        const rY = (mouseX / (width / 2)) * 10;

        setTiltStyle({
            transform: `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'transform 0.1s ease-out',
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s ease-out',
        });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            className={className}
        >
            {children}
        </div>
    );
};

const Experience = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            title: "Graduate Innovation Engineer",
            provider: "FORGE Innovation & Ventures × PROTOSEM",
            description: "Certified for successfully completing the Graduate Innovation Engineer Internship, mastering Industrial Digital Technologies, Industry 4.0, and automation.",
            image: "/certifications/Forge Certificate.jpeg"
        },
        {
            title: "Junior Web Developer Internship",
            provider: "BINI",
            description: "Certified for completing a Web Development Internship at BINI, contributing to responsive web apps, frontend interfaces, and development workflows.",
            image: "/certifications/BINI Certificate.jpeg"
        },
        {
            title: "FAO Science and Innovation Strategy",
            provider: "FAO eLearning Academy",
            description: "Certified by the Food and Agriculture Organization (FAO). Gained knowledge of global science, technology, and innovation frameworks.",
            image: "/certifications/Fao.png"
        },
        {
            title: "Introduction to Prompt Engineering for Generative AI",
            provider: "LinkedIn Learning",
            description: "Developed foundational skills in AI prompting, prompt design, and effective interaction with generative AI systems.",
            image: "/certifications/Prompt engerining.png"
        },
        {
            title: "What Is Generative AI?",
            provider: "LinkedIn Learning",
            description: "Learned core concepts of generative AI, its applications, tools, and real-world industry use cases.",
            image: "/certifications/generative ai.png"
        },
        {
            title: "Gamification and Gaming",
            provider: "Coursera / KCT",
            description: "Authorized by Kumaraguru College of Technology. Explored game design principles and engagement strategies.",
            image: "/certifications/Gamification and gaming.png"
        },
        {
            title: "System Verilog for Semiconductor Design",
            provider: "NIT Trichy",
            description: "Workshop on hardware design, verification flow, and semiconductor development practices.",
            image: "/certifications/system verilog.png"
        },
        {
            title: "Introduction to the Treatment of Tannery Effluents",
            provider: "UNIDO",
            description: "Certified by UNIDO. Understood industrial wastewater treatment methods and environmental impact.",
            image: "/certifications/Unido.png"
        },
        {
            title: "Intro to ML, DL and Computer Vision",
            provider: "AI Club",
            description: "Completed an intensive summer school program. Gained foundational knowledge in machine learning, deep learning, and computer vision.",
            image: "/certifications/Intro to ML.pdf.png"
        },
        {
            title: "Introduction to Data Mining Course",
            provider: "Simplilearn SkillUp",
            description: "Certified by Simplilearn SkillUp. Learned essential data mining concepts including pattern discovery, preprocessing, and analytical methods.",
            image: "/certifications/Data Mining.png"
        },
        {
            title: "Data Visualization",
            provider: "University of Illinois Urbana-Champaign / Coursera",
            description: "Authorized by UIUC. Developed skills in presenting data effectively using visual analytics, storytelling, and design principles.",
            image: "/certifications/Data visualization.png"
        }
    ];

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-accent relative">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="text-4xl font-black text-secondary mb-16 text-center uppercase tracking-wider"
                >
                    Experience & <span className="text-primary bg-secondary px-3 py-1 border-[3px] border-secondary shadow-brutal-sm inline-block select-none ml-1">Certifications</span>
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.4
                            }
                        }
                    }}
                    className="space-y-12"
                >
                    {/* /Internship Section */}
                    <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } } }} className="mb-16">
                        <h3 className="text-xl sm:text-2xl font-black text-secondary mb-8 flex items-center">
                            <FaBriefcase className="text-secondary mr-3" /> Internship & Work
                        </h3>
                        <div className="relative ml-3 pl-8 pb-4">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                transition={{ duration: 2.0, ease: "easeInOut" }}
                                className="absolute left-0 top-0 w-[4px] bg-secondary h-full rounded-none"
                            ></motion.div>

                            {/* Internship Item 1 */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeInOut" } } }}
                                whileHover={{ scale: 1.01 }}
                                className="relative bg-white p-6 border-[3px] border-secondary shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all rounded-none mb-8"
                            >
                                <span className="absolute -left-[42px] top-6 bg-primary w-6 h-6 border-2 border-secondary shadow-brutal-sm flex items-center justify-center z-10 rounded-none"></span>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                    <h4 className="text-xl font-black text-secondary">Graduate Innovation Engineer Intern</h4>
                                    <span className="text-xs font-black text-secondary bg-primary border-2 border-secondary px-2.5 py-1 shadow-brutal-sm self-start whitespace-nowrap">
                                        Jan 2026 – Jun 2026
                                    </span>
                                </div>
                                <p className="text-primary font-bold">FORGE Innovation & Ventures × PROTOSEM Innovation Engineers</p>
                                <p className="text-secondary/70 font-bold mt-3 text-sm sm:text-base leading-relaxed">
                                    Successfully completed the Graduate Innovation Engineer Internship, gaining hands-on experience in Industrial Digital Technologies, Industry 4.0, automation, innovation engineering, and collaborative problem-solving through practical training and real-world industry exposure.
                                </p>
                            </motion.div>

                            {/* Internship Item 2 */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeInOut" } } }}
                                whileHover={{ scale: 1.01 }}
                                className="relative bg-white p-6 border-[3px] border-secondary shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all rounded-none"
                            >
                                <span className="absolute -left-[42px] top-6 bg-primary w-6 h-6 border-2 border-secondary shadow-brutal-sm flex items-center justify-center z-10 rounded-none"></span>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                    <h4 className="text-xl font-black text-secondary">Junior Web Developer Intern</h4>
                                    <span className="text-xs font-black text-secondary bg-primary border-2 border-secondary px-2.5 py-1 shadow-brutal-sm self-start whitespace-nowrap">
                                        Dec 2025 – Feb 2026
                                    </span>
                                </div>
                                <p className="text-primary font-bold">BINI</p>
                                <p className="text-secondary/70 font-bold mt-3 text-sm sm:text-base leading-relaxed">
                                    Successfully completed a Web Development Internship at BINI, where I contributed to responsive web application development, improved user interfaces, and collaborated with the development team using modern web technologies while strengthening my frontend development skills.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Certifications & Workshops */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } } }}>
                        <h3 className="text-xl sm:text-2xl font-black text-secondary mb-8 flex items-center">
                            <FaCertificate className="text-secondary mr-3" /> Workshops & Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <Tilt
                                    key={index}
                                    className="bg-white p-6 border-[3px] border-secondary shadow-brutal hover:shadow-brutal-lg transition-shadow duration-300 flex flex-col rounded-none cursor-pointer"
                                >
                                    <h4 className="text-lg font-black text-secondary mb-2 leading-snug">{cert.title}</h4>
                                    <p className="text-primary text-xs font-bold mb-2 uppercase tracking-wide">{cert.provider}</p>
                                    <p className="text-secondary/70 font-bold text-sm mb-4 flex-grow">
                                        {cert.description}
                                    </p>
                                    <button
                                        onClick={() => setSelectedCert(cert)}
                                        className="inline-flex items-center justify-center mt-2 px-4 py-2 bg-white text-secondary hover:bg-primary border-2 border-secondary shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal text-xs font-black transition-all active:translate-x-0 active:translate-y-0 active:shadow-none self-start rounded-none uppercase"
                                    >
                                        VIEW CERTIFICATE <span className="ml-2">→</span>
                                    </button>
                                </Tilt>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Modal for Certificate Image */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-white border-[4px] border-secondary shadow-brutal-lg p-4 sm:p-6 rounded-none animate-none"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-white text-secondary border-2 border-secondary shadow-brutal-sm hover:bg-primary transition-all rounded-none"
                            >
                                <FaTimes className="text-xl" />
                            </button>

                            <div className="border-[3px] border-secondary overflow-hidden bg-accent flex items-center justify-center rounded-none p-1">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-auto object-contain max-h-[70vh] rounded-none border-none"
                                />
                            </div>

                            <div className="p-4 sm:p-5 bg-primary border-t-[3px] border-secondary mt-4 border-2 border-secondary shadow-brutal-sm rounded-none">
                                <h3 className="text-lg sm:text-xl font-black text-secondary leading-snug">{selectedCert.title}</h3>
                                <p className="text-secondary/70 font-bold text-xs sm:text-sm uppercase mt-1 tracking-wider">{selectedCert.provider}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
