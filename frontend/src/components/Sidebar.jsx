import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg'; // Import the image

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', name: 'HOME', icon: FaHome },
        { path: '/about', name: 'ABOUT ME', icon: FaUser },
        { path: '/skills', name: 'SKILLS', icon: FaCode },
        { path: '/projects', name: 'PROJECTS', icon: FaBriefcase },
        { path: '/experience', name: 'EXPERIENCE & CERTIFICATIONS', icon: FaBriefcase },
        { path: '/contact', name: 'CONTACT', icon: FaEnvelope },
    ];

    return (
        <aside className={`w-64 h-screen fixed left-0 top-0 bg-primary z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            {/* Mobile Close Button */}
            <button onClick={toggleSidebar} className="md:hidden absolute top-4 right-4 text-secondary hover:text-white">
                <FaTimes size={24} />
            </button>
            {/* Profile Section */}
            <div className="p-8 flex flex-col items-center justify-center bg-black/10">
                <div className="w-32 h-32 rounded-full bg-secondary mb-4 overflow-hidden border-4 border-white shadow-lg">
                    {/* Placeholder for Profile Image - User should replace this */}
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <h2 className="text-secondary font-bold text-xl tracking-wider uppercase text-center">Meiyarasan S</h2>
                <p className="text-secondary/80 text-xs font-semibold tracking-widest uppercase mt-2 text-center">AI & Data Science</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-8">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`flex items-center px-8 py-3 text-sm font-bold tracking-widest transition-all duration-300 ${isActive(item.path)
                                    ? 'text-white bg-secondary border-r-4 border-white'
                                    : 'text-secondary hover:text-white hover:bg-black/80'
                                    }`}
                            >
                                <item.icon className={`mr-4 text-lg ${isActive(item.path) ? 'text-primary' : ''}`} />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer / Socials */}
            <div className="p-8 bg-black/5">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://github.com/meiyarasam" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-white hover:text-secondary transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-white hover:text-secondary transition-colors">
                        <FaLinkedin />
                    </a>
                </div>
                <p className="text-xs text-center text-secondary/60 font-medium">
                    &copy; 2026 Meiyarasan
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
