import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "VR-Based Hydraulic Cylinder Maintenance Training System",
            description: "Developed at FORGE. An immersive VR training simulator for hydraulic cylinder maintenance, providing hands-on training for fault diagnosis, leak detection, and interactive seal replacement.",
            tech: ["Unity 6", "C#", "Meta Quest 3", "Virtual Reality"],
            links: { github: "https://github.com/murali2105/Hydraulic-Cylinder-Service-Simulator", live: "#" }
        },
        {
            title: "AutoCare Hub",
            description: "A vehicle maintenance portal allowing customers to review service packages and book repair or maintenance requests.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/Auto_Care", live: "https://go.screenpal.com/watch/cOn26Kn0FVS" }
        },
        {
            title: "BuildRight Constructions",
            description: "A construction and infrastructure showcase platform presenting projects, capabilities, and client enquiry systems.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/Build_right", live: "https://go.screenpal.com/watch/cOn26Un0FcT" }
        },
        {
            title: "e-commerce",
            description: "A modern e-commerce web application designed to deliver a smooth product browsing experience with intuitive navigation, dynamic listings, and streamlined enquiry or purchase workflows.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/E_commerce", live: "https://go.screenpal.com/watch/cOno2sn0qUg" }
        },
        {
            title: "EduSpark Academy",
            description: "An online learning platform where students explore courses, structured learning paths, and submit academic enquiries.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/Edu_spark", live: "https://go.screenpal.com/watch/cOn26kn0FVF" }
        },
        {
            title: "Event Management System",
            description: "A comprehensive web application for organizing, managing, and tracking events efficiently.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            links: { github: "https://github.com/meiyarasam/Eventy_pro", live: "https://go.screenpal.com/watch/cOn2QGn0bSx" }
        },
        {
            title: "GreenBite Organics",
            description: "A modern organic products platform promoting sustainable living, product discovery, and customer enquiries.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/green_bit", live: "https://go.screenpal.com/watch/cOn26Fn0bWs" }
        },
        {
            title: "MediCare Plus",
            description: "A professional healthcare service website enabling patients to explore treatments and submit appointment requests.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/Medi_care", live: "https://go.screenpal.com/watch/cOn26Tn0Fci" }
        },
        {
            title: "PayFlow Finance",
            description: "A digital finance services website highlighting payment solutions, business tools, and enterprise communication.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/payflow_finace", live: "https://go.screenpal.com/watch/cOn26zn0FcH" }
        },
        {
            title: "TechNova Solutions",
            description: "A corporate MERN stack website showcasing software development, cloud solutions, and digital transformation services.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/tech_nova", live: "https://go.screenpal.com/watch/cOn26Qn0bWO" }
        },
        {
            title: "Time Log Portal",
            description: "A productivity-focused web application that enables users to record daily login and logout times using an interactive calendar and clock interface.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/meiyarasam/time_log_portal", live: "https://go.screenpal.com/watch/cOn2bsn0Fx2" }
        }
    ];

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-accent">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="text-4xl font-black text-secondary mb-16 text-center uppercase tracking-wider"
                >
                    Completed <span className="text-primary bg-secondary px-3 py-1 border-[3px] border-secondary shadow-brutal-sm inline-block select-none ml-1">Projects</span>
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeInOut" } }
                            }}
                            whileHover={{ scale: 1.01 }}
                            className="bg-white border-[3px] border-secondary shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 rounded-none overflow-hidden flex flex-col h-full"
                        >
                            <div className="p-6 h-full flex flex-col flex-1">
                                <h3 className="text-2xl font-black text-secondary mb-3">{project.title}</h3>
                                <p className="text-secondary/70 font-bold mb-6 flex-grow text-sm sm:text-base leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-2.5 py-1 bg-primary text-secondary border-2 border-secondary shadow-brutal-sm text-[10px] font-black uppercase rounded-none select-none">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t-[3px] border-secondary mt-auto gap-4">
                                    {project.links.github && project.links.github !== "#" && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-secondary hover:bg-primary border-2 border-secondary shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal text-xs font-black flex items-center gap-2 transition-all active:translate-x-0 active:translate-y-0 active:shadow-none rounded-none">
                                            <FaGithub size={14} /> Code
                                        </a>
                                    )}
                                    {project.links.live && project.links.live !== "#" && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-secondary hover:bg-primary border-2 border-secondary shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal text-xs font-black flex items-center gap-2 transition-all active:translate-x-0 active:translate-y-0 active:shadow-none rounded-none ml-auto">
                                            <FaExternalLinkAlt size={12} /> Demo
                                        </a>
                                    )}
                                    {(!project.links.github || project.links.github === "#") && (!project.links.live || project.links.live === "#") && (
                                        <span className="text-xs font-black text-secondary/50 uppercase tracking-widest py-2">
                                            Internal Project / Proprietary
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
