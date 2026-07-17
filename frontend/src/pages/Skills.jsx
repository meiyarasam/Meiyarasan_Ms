import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaDatabase, FaBrain, FaLaptopCode, FaTools, FaHandshake } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: FaCode,
            skills: ["Python", "Java", "C", "C++", "JavaScript"]
        },
        {
            title: "Full Stack ",
            icon: FaLayerGroup,
            skills: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
        },
        {
            title: "Databases",
            icon: FaDatabase,
            skills: ["MongoDB", "MySQL"]
        },
        {
            title: "Machine Learning",
            icon: FaBrain,
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
        },
        {
            title: "Web Development",
            icon: FaLaptopCode,
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"]
        },
        {
            title: "Tools & Platforms",
            icon: FaTools,
            skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Weka", "Tinkercad", "Wokwi", "Fusion 360", "RD Works", "Prusa Slicer", "Antigravity", "Windsurf", "v0 by Vercel", "Cisco Packet Tracer", "Scratch", "MIT App Inventor"]
        },
        {
            title: "Soft Skills",
            icon: FaHandshake,
            skills: ["Communication", "Leadership", "Teamwork", "Problem Solving", "Time Management", "Adaptability"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeInOut" } }
    };

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-accent">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="text-4xl font-black text-secondary mb-16 text-center uppercase tracking-wider"
                >
                    Technical <span className="text-primary bg-secondary px-3 py-1 border-[3px] border-secondary shadow-brutal-sm inline-block select-none">Skills</span>
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.01 }}
                            className="bg-white p-8 border-[3px] border-secondary shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150 rounded-none"
                        >
                            <h3 className="text-lg sm:text-xl font-black text-secondary mb-6 pb-3 border-b-[3px] border-secondary flex items-center bg-primary px-4 py-2.5 shadow-brutal-sm rounded-none border border-secondary">
                                <category.icon className="mr-3 text-secondary text-xl sm:text-2xl" />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-4 py-2 bg-accent text-secondary border-2 border-secondary shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal hover:bg-primary transition-all cursor-default text-xs sm:text-sm rounded-none font-bold active:translate-x-0 active:translate-y-0 active:shadow-none"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
