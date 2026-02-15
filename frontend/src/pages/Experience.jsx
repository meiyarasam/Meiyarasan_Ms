import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaTimes } from 'react-icons/fa';

const Experience = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            title: "FAO Science and Innovation Strategy",
            provider: "FAO eLearning Academy",
            description: "Certified by the Food and Agriculture Organization (FAO). Gained knowledge of global science, technology, and innovation frameworks.",
            image: "/certifications/fao-science.png"
        },
        {
            title: "Introduction to Prompt Engineering for Generative AI",
            provider: "LinkedIn Learning",
            description: "Developed foundational skills in AI prompting, prompt design, and effective interaction with generative AI systems.",
            image: "/certifications/prompt-engineering.png"
        },
        {
            title: "What Is Generative AI?",
            provider: "LinkedIn Learning",
            description: "Learned core concepts of generative AI, its applications, tools, and real-world industry use cases.",
            image: "/certifications/generative-ai.png"
        },
        {
            title: "Gamification and Gaming",
            provider: "Coursera / KCT",
            description: "Authorized by Kumaraguru College of Technology. Explored game design principles and engagement strategies.",
            image: "/certifications/gamification.png"
        },
        {
            title: "System Verilog for Semiconductor Design",
            provider: "NIT Trichy",
            description: "Workshop on hardware design, verification flow, and semiconductor development practices.",
            image: "/certifications/system-verilog.png"
        },
        {
            title: "Introduction to the Treatment of Tannery Effluents",
            provider: "UNIDO",
            description: "Certified by UNIDO. Understood industrial wastewater treatment methods and environmental impact.",
            image: "/certifications/tannery-effluents.png"
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
            image: "/certifications/data-mining.png"
        },
        {
            title: "Data Visualization",
            provider: "University of Illinois Urbana-Champaign / Coursera",
            description: "Authorized by UIUC. Developed skills in presenting data effectively using visual analytics, storytelling, and design principles.",
            image: "/certifications/data-visualization.png"
        }
    ];

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-accent relative">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="text-4xl font-bold text-secondary mb-16 text-center uppercase tracking-wider"
                >
                    Experience & <span className="text-primary">Certifications</span>
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
                    {/* Internship Section */}
                    <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } } }} className="mb-16">
                        <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center">
                            <FaBriefcase className="text-primary mr-3" /> Internship & Work
                        </h3>
                        <div className="relative ml-3 pl-8 pb-4">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                transition={{ duration: 2.0, ease: "easeInOut" }}
                                className="absolute left-0 top-0 w-1 bg-gray-300 h-full"
                            ></motion.div>
                            <motion.div
                                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeInOut" } } }}
                                whileHover={{ scale: 1.02 }}
                                className="relative bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary transition-all"
                            >
                                <span className="absolute -left-[42px] top-6 bg-primary w-6 h-6 rounded-full border-4 border-white shadow-md z-10"></span>
                                <h4 className="text-xl font-bold text-secondary">Junior Web Developer Intern</h4>
                                <p className="text-primary font-bold">Wander With Food</p>
                                <p className="text-gray-600 mt-2">
                                    Working on developing and maintaining web applications, collaborating with the design team
                                    to implement responsive user interfaces using modern web technologies.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Certifications & Workshops */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } } }}>
                        <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center">
                            <FaCertificate className="text-primary mr-3" /> Workshops & Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
                                    className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${index % 2 === 0 ? 'border-primary' : 'border-secondary'} transition-all duration-300 flex flex-col`}
                                >
                                    <h4 className="text-lg font-bold text-secondary mb-2">{cert.title}</h4>
                                    <p className="text-primary text-xs font-bold mb-2 uppercase tracking-tight">{cert.provider}</p>
                                    <p className="text-gray-500 text-sm mb-4 flex-grow">
                                        {cert.description}
                                    </p>
                                    <button
                                        onClick={() => setSelectedCert(cert)}
                                        className="inline-flex items-center text-primary font-bold text-sm hover:text-secondary transition-colors text-left"
                                    >
                                        VIEW CERTIFICATE <span className="ml-2">→</span>
                                    </button>
                                </motion.div>
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
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300"
                            >
                                <FaTimes className="text-xl" />
                            </button>

                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="w-full h-auto object-contain max-h-[80vh]"
                            />

                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-bold text-secondary">{selectedCert.title}</h3>
                                <p className="text-primary font-bold text-sm uppercase mt-1">{selectedCert.provider}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
