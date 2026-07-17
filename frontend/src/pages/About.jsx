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
                    About <span className="text-primary">Me</span>
                </motion.h2>
                <div className="w-24 h-[8px] bg-primary border-[3px] border-secondary shadow-brutal-sm mx-auto mb-12 rounded-none"></div>

                <div className="text-left max-w-4xl mx-auto mb-16">
                    <h3 className="text-3xl font-black text-secondary mb-6">
                        I'm <span className="text-secondary bg-primary px-3 py-1 border-[3px] border-secondary shadow-brutal-sm rounded-none inline-block">Meiyarasan S</span>, AI Engineer / Developer
                    </h3>
                    <p className="text-secondary/80 font-bold leading-relaxed text-lg">
                        AI & Data Science undergraduate with hands-on experience in machine learning, data analysis,
                        and full stack development. Strong in preprocessing, visualization, model training, and
                        modern web technologies. Quick learner and team player, interested in solving real-world
                        problems using intelligent systems.
                    </p>
                </div>
            </div>

            {/* Separator */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="w-full h-[4px] bg-secondary shadow-brutal-sm"></div>
            </div>



            {/* "What I Do" Section */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h3 className="text-3xl font-black text-secondary uppercase tracking-tighter mb-12 flex items-center gap-3">
                    <span className="w-4 h-8 bg-primary border-[3px] border-secondary shadow-brutal-sm inline-block rounded-none"></span>
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
                            className="flex items-center p-6 bg-white border-[3px] border-secondary shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150 rounded-none"
                        >
                            <div className="mr-6 text-secondary flex-shrink-0">
                                <div className="w-16 h-16 bg-primary border-[3px] border-secondary shadow-brutal-sm flex items-center justify-center text-secondary rounded-none">
                                    <service.icon size={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-secondary mb-1.5 uppercase">{service.title}</h4>
                                <p className="text-secondary/70 font-bold text-sm">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Separator */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="w-full h-[4px] bg-secondary shadow-brutal-sm"></div>
            </div>

            {/* Education Section */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h3 className="text-3xl font-black text-secondary uppercase tracking-tighter mb-12 flex items-center gap-3">
                    <span className="w-4 h-8 bg-primary border-[3px] border-secondary shadow-brutal-sm inline-block rounded-none"></span>
                    Education
                </h3>

                <div className="space-y-12">
                    {/* B.Tech */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0 }}
                        className="relative border-l-[3px] border-secondary pl-8 ml-4"
                    >
                        <div className="absolute w-6 h-6 bg-primary border-2 border-secondary shadow-brutal-sm -left-[14px] top-1 rounded-none z-10"></div>
                        <div className="bg-white p-6 border-[3px] border-secondary shadow-brutal rounded-none hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150">
                            <h4 className="text-xl font-black text-secondary uppercase leading-snug">B.Tech Artificial Intelligence and Data Science</h4>
                            <span className="inline-block bg-primary text-secondary border-2 border-secondary shadow-brutal-sm px-3 py-1 text-xs font-bold mt-2 mb-4 rounded-none uppercase">
                                2024 - 2027
                            </span>
                            <p className="text-base text-secondary/70 font-semibold">Kumaraguru College of Technology (KCT)</p>
                        </div>
                    </motion.div>

                    {/* Diploma */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.2 }}
                        className="relative border-l-[3px] border-secondary pl-8 ml-4"
                    >
                        <div className="absolute w-6 h-6 bg-primary border-2 border-secondary shadow-brutal-sm -left-[14px] top-1 rounded-none z-10"></div>
                        <div className="bg-white p-6 border-[3px] border-secondary shadow-brutal rounded-none hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150">
                            <h4 className="text-xl font-black text-secondary uppercase leading-snug">Diploma in Electrical and Electronics Engineering</h4>
                            <span className="inline-block bg-primary text-secondary border-2 border-secondary shadow-brutal-sm px-3 py-1 text-xs font-bold mt-2 mb-4 rounded-none uppercase">
                                2022 - 2024
                            </span>
                            <p className="text-base text-secondary/70 font-semibold">Sri Ramakrishna mission vidyalaya polytechnic college</p>
                        </div>
                    </motion.div>

                    {/* HSC */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.4 }}
                        className="relative border-l-[3px] border-secondary pl-8 ml-4"
                    >
                        <div className="absolute w-6 h-6 bg-primary border-2 border-secondary shadow-brutal-sm -left-[14px] top-1 rounded-none z-10"></div>
                        <div className="bg-white p-6 border-[3px] border-secondary shadow-brutal rounded-none hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150">
                            <h4 className="text-xl font-black text-secondary uppercase leading-snug">Higher Secondary Education (12th Grade)</h4>
                            <span className="inline-block bg-primary text-secondary border-2 border-secondary shadow-brutal-sm px-3 py-1 text-xs font-bold mt-2 mb-4 rounded-none uppercase">
                                2021 - 2022
                            </span>
                            <p className="text-base text-secondary/70 font-semibold">Sri Ramakrishna Matric Higher Secondary School</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Separator */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="w-full h-[4px] bg-secondary shadow-brutal-sm"></div>
            </div>

            {/* Languages Section */}
            <div className="max-w-7xl mx-auto px-8 py-20 pb-24">
                <h3 className="text-3xl font-black text-secondary uppercase tracking-tighter mb-12 flex items-center gap-3">
                    <span className="w-4 h-8 bg-primary border-[3px] border-secondary shadow-brutal-sm inline-block rounded-none"></span>
                    Languages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
                    {/* Tamil */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-6 border-[3px] border-secondary shadow-brutal flex items-center justify-between rounded-none hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150"
                    >
                        <div>
                            <h4 className="text-xl font-black text-secondary uppercase">Tamil</h4>
                        </div>
                        <div className="w-12 h-12 bg-primary border-[3px] border-secondary shadow-brutal-sm flex items-center justify-center text-secondary font-black text-base rounded-none select-none">
                            TA
                        </div>
                    </motion.div>

                    {/* English */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-6 border-[3px] border-secondary shadow-brutal flex items-center justify-between rounded-none hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150"
                    >
                        <div>
                            <h4 className="text-xl font-black text-secondary uppercase">English</h4>
                        </div>
                        <div className="w-12 h-12 bg-primary border-[3px] border-secondary shadow-brutal-sm flex items-center justify-center text-secondary font-black text-base rounded-none select-none">
                            EN
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
