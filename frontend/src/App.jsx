import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsSidebarOpen(false); // Close mobile menu if open
    }
  };

  // Scroll Spy Observer
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Center band detection
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-accent min-h-screen font-sans flex text-textMain relative">
        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 w-full bg-primary z-40 px-4 py-3 flex justify-between items-center shadow-md">
          <h1 className="font-bold text-xl text-secondary">MEIYARASAN</h1>
          <button onClick={toggleSidebar} className="text-secondary focus:outline-none">
            <FaBars size={24} />
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        {/* Overlay for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main Content Area */}
        <main className="flex-grow md:ml-64 min-h-screen pt-16 md:pt-0 flex flex-col">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
