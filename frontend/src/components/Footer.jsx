import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary/50 py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-white">Meiyarasan S</span>
                        <p className="text-gray-400 text-sm mt-1">
                            Artificial Intelligence & Data Science Student
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/meiyarasam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Meiyarasan S. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
