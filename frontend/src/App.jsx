import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import CursorAnimation from './components/CursorAnimation';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <CursorAnimation />
      <div className="bg-accent min-h-screen font-sans flex text-textMain relative">
        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 w-full bg-primary z-40 px-4 py-3 flex justify-between items-center shadow-md">
          <h1 className="font-bold text-xl text-secondary">MEIYARASAN</h1>
          <button onClick={toggleSidebar} className="text-secondary focus:outline-none">
            <FaBars size={24} />
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Overlay for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main Content Area */}
        <main className="flex-grow md:ml-64 min-h-screen pt-16 md:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
