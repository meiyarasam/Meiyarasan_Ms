import { motion } from 'framer-motion';
import { FaLaptopCode, FaDatabase, FaBrain, FaChartBar } from 'react-icons/fa';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };



    const services = [
        { icon: FaBrain, title: "AI SOLUTIONS", desc: "Developing intelligent models and neural networks." },
        { icon: FaDatabase, title: "DATA SCIENCE", desc: "Extracting insights from complex datasets." },
        { icon: FaLaptopCode, title: "WEB DEV", desc: "Building responsive full-stack applications." },
        { icon: FaChartBar, title: "ANALYSIS", desc: "Visualizing data for better decision making." }
    ];

    return (
        <section className="min-h-screen bg-accent text-textMain">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-20 pb-12">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="text-5xl font-black text-secondary uppercase tracking-tighter mb-4 text-center"
                >
                    About <span className="text-secondary">Me</span>
                </motion.h2>
                <div className="w-24 h-2 bg-primary mx-auto mb-12"></div>

                <div className="text-left max-w-4xl mx-auto mb-16">
                    <h3 className="text-3xl font-bold text-secondary mb-6">
                        I'm <span className="text-secondary border-b-4 border-primary">Meiyarasan S</span>, AI Engineer / Developer
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-lg">
                        AI & Data Science undergraduate with hands-on experience in machine learning, data analysis,
                        and full stack development. Strong in preprocessing, visualization, model training, and
                        modern web technologies. Quick learner and team player, interested in solving real-world
                        problems using intelligent systems.
                    </p>
                </div>
            </div>

            {/* Separator */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="w-full h-2 bg-secondary"></div>
            </div>



            {/* "What I Do" Section */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h3 className="text-3xl font-black text-secondary uppercase tracking-tighter mb-12 border-l-8 border-primary pl-6">
                    What I Do!
                </h3>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.4 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 1.2, ease: "easeInOut" }
                                }
                            }}
                            className="flex"
                        >
                            <div className="mr-6 text-4xl text-secondary">
                                <div className="w-16 h-16 border-2 border-secondary rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300">
                                    <service.icon size={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-2 uppercase">{service.title}</h4>
                                <p className="text-gray-500">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Separator */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="w-full h-2 bg-secondary"></div>
            </div>

            {/* Education Section */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h3 className="text-3xl font-black text-secondary uppercase tracking-tighter mb-12 border-l-8 border-primary pl-6">
                    Education
                </h3>

                <div className="space-y-12">
                    {/* B.Tech */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0 }}
                        className="relative border-l-4 border-gray-300 pl-8 ml-4"
                    >
                        <div className="absolute w-6 h-6 bg-primary rounded-full -left-[14px] top-1 border-4 border-white"></div>
                        <h4 className="text-2xl font-bold text-secondary uppercase">B.Tech Artificial Intelligence and Data Science</h4>
                        <span className="inline-block bg-black/5 text-gray-600 px-3 py-1 rounded-full text-sm font-bold mt-2 mb-4">
                            2024 - 2027
                        </span>
                        <p className="text-lg text-gray-700 font-medium">Kumaraguru College of Technology (KCT)</p>

                    </motion.div>

                    {/* Diploma */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.2 }}
                        className="relative border-l-4 border-gray-300 pl-8 ml-4"
                    >
                        <div className="absolute w-6 h-6 bg-primary rounded-full -left-[14px] top-1 border-4 border-white"></div>
                        <h4 className="text-2xl font-bold text-secondary uppercase">Diploma in Electrical and Electronics Engineering</h4>
                        <span className="inline-block bg-black/5 text-gray-600 px-3 py-1 rounded-full text-sm font-bold mt-2 mb-4">
                            2022 - 2024
                        </span>
                        <p className="text-lg text-gray-700 font-medium">Sri Ramakrishna mission vidyalaya polytechnic college</p>

                    </motion.div>

                    {/* HSC */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.4 }}
                        className="relative border-l-4 border-gray-300 pl-8 ml-4"
                    >
                        <div className="absolute w-6 h-6 bg-primary rounded-full -left-[14px] top-1 border-4 border-white"></div>
                        <h4 className="text-2xl font-bold text-secondary uppercase">Higher Secondary Education (12th Grade)</h4>
                        <span className="inline-block bg-black/5 text-gray-600 px-3 py-1 rounded-full text-sm font-bold mt-2 mb-4">
                            2021 - 2022
                        </span>
                        <p className="text-lg text-gray-700 font-medium">Sri Ramakrishna Matric Higher Secondary School</p>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
