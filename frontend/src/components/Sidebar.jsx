import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg'; // Import the image

const Sidebar = ({ isOpen, toggleSidebar, activeSection, scrollToSection }) => {
    const navItems = [
        { id: 'home', name: 'HOME', icon: FaHome },
        { id: 'about', name: 'ABOUT ME', icon: FaUser },
        { id: 'skills', name: 'SKILLS', icon: FaCode },
        { id: 'projects', name: 'PROJECTS', icon: FaBriefcase },
        { id: 'experience', name: 'EXPERIENCE & CERTIFICATIONS', icon: FaBriefcase },
        { id: 'contact', name: 'CONTACT', icon: FaEnvelope },
    ];

    return (
        <aside className={`w-64 h-screen fixed left-0 top-0 bg-white z-50 flex flex-col border-r-[3px] border-secondary shadow-none transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            {/* Mobile Close Button */}
            <button onClick={toggleSidebar} className="md:hidden absolute top-4 right-4 text-secondary hover:text-primary transition-colors">
                <FaTimes size={24} />
            </button>
            {/* Profile Section */}
            <div className="p-8 flex flex-col items-center justify-center border-b-[3px] border-secondary bg-primary">
                <div className="w-28 h-28 bg-white mb-4 overflow-hidden border-[3px] border-secondary shadow-brutal flex items-center justify-center rounded-none">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover transition-all duration-500 rounded-none"
                    />
                </div>
                <h2 className="text-secondary font-black text-xl tracking-wide uppercase text-center">{`Meiyarasan S`}</h2>
                <span className="text-secondary font-bold text-[9px] tracking-widest uppercase mt-2 text-center bg-white border-2 border-secondary px-2 py-0.5 shadow-brutal-sm inline-block rounded-none">
                    AI & Data Science
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 overflow-y-auto bg-accent/10">
                <ul className="space-y-3">
                    {navItems.map((item) => (
                        <li key={item.name} className="px-3">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full flex items-center px-5 py-3.5 text-xs font-black tracking-widest rounded-none border-2 transition-all duration-150 text-left ${activeSection === item.id
                                    ? 'text-primary bg-secondary border-secondary shadow-brutal-sm translate-x-0.5 translate-y-0.5'
                                    : 'text-secondary bg-white border-secondary shadow-brutal-sm hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal hover:bg-primary'
                                    }`}
                            >
                                <item.icon className={`mr-4 text-base ${activeSection === item.id ? 'text-primary' : 'text-secondary'}`} />
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer / Socials */}
            <div className="p-6 border-t-[3px] border-secondary bg-accent/20">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://github.com/meiyarasam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-secondary flex items-center justify-center border-2 border-secondary shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal hover:bg-primary transition-all rounded-none">
                        <FaGithub size={18} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-secondary flex items-center justify-center border-2 border-secondary shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal hover:bg-primary transition-all rounded-none">
                        <FaLinkedin size={18} />
                    </a>
                </div>
                <p className="text-[10px] text-center text-secondary/60 font-black uppercase tracking-widest">
                    &copy; 2026 Meiyarasan
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
