import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Home = () => {
    return (
        <section className="h-screen flex items-center bg-white relative overflow-hidden">
            {/* Split Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary hidden md:block"></div>

            <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center relative z-10">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full md:w-1/2 md:pr-12 pt-20 md:pt-0"
                >
                    <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">
                        Hi There!
                    </h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary mb-2 leading-tight">
                        I'M <span className="text-primary whitespace-nowrap">MEIYARASAN S</span>
                    </h1>
                    <div className="inline-block bg-primary text-secondary font-bold px-4 py-1 mb-6 text-sm tracking-widest uppercase">
                        AI & Data Science Student
                    </div>
                    <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
                        Building intelligent systems and full-stack applications with passion and precision.
                        Dedicated to solving real-world problems through code.
                    </p>
                    <Link to="/about" className="inline-block bg-primary text-secondary font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all transform hover:-translate-y-1">MORE ABOUT ME</Link>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full md:w-1/2 h-[50vh] md:h-screen relative"
                >
                    <div className="w-full h-full bg-gray-200 grayscale contrast-125 overflow-hidden shadow-2xl relative">
                        <img
                            src={profileImage}
                            alt="Meiyarasan"
                            className="w-full h-full object-cover object-top mix-blend-normal opacity-100" // Removed mix-blend-multiply and increased opacity for clarity
                        />
                        <div className="absolute inset-0 bg-yellow-400/10 mix-blend-overlay"></div>
                    </div>

                    {/* Floating Social Icons sidebar on right edge (optional/decorative) */}
                    <div className="absolute right-4 bottom-8 flex flex-col space-y-4 text-primary">
                        <div className="w-1 h-20 bg-primary mx-auto"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
