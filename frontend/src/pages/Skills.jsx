import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaDatabase, FaBrain, FaLaptopCode, FaTools } from 'react-icons/fa';

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
                    className="text-4xl font-bold text-secondary mb-16 text-center uppercase tracking-wider"
                >
                    Technical <span className="text-primary">Skills</span>
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
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-primary hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-secondary mb-6 border-b border-gray-200 pb-2 flex items-center">
                                <category.icon className="mr-3 text-primary" />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.1, backgroundColor: "#FFD700", color: "#000" }}
                                        className="px-4 py-2 bg-gray-100 rounded-lg text-secondary font-medium transition-colors duration-300 cursor-default shadow-sm"
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
