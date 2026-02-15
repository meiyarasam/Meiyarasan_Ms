import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            // Check if backend is running locally, adjust URL if needed
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            await axios.post(`${apiUrl}/api/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-accent">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="text-4xl font-bold text-secondary mb-16 text-center uppercase tracking-wider"
                >
                    Get In <span className="text-primary">Touch</span>
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            opacity: 1,
                            transition: { staggerChildren: 0.4 }
                        }
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Contact Info */}
                    <motion.div
                        variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } } }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-secondary mb-6">Let's Connect</h3>
                        <p className="text-gray-600 mb-8 text-lg">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="flex items-center space-x-4">
                            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                                <FaPhone size={20} />
                            </motion.div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Phone</p>
                                <p className="font-bold text-secondary">6374424989</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <motion.div whileHover={{ scale: 1.1, rotate: -10 }} className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                                <FaEnvelope size={20} />
                            </motion.div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Email</p>
                                <a href="mailto:meiyarasanmeiyarasan3@gmail.com" className="font-bold text-secondary hover:text-primary transition-colors">
                                    meiyarasanmeiyarasan3@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <motion.div whileHover={{ scale: 1.1, y: -5 }} className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                                <FaMapMarkerAlt size={20} />
                            </motion.div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Location</p>
                                <p className="font-bold text-secondary">Krishnagiri, Tamil Nadu, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } } }}
                        className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-primary"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-secondary placeholder-gray-400 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-secondary placeholder-gray-400 transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-secondary resize-none placeholder-gray-400 transition-all"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary text-secondary font-black py-4 rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2 uppercase tracking-widest shadow-lg"
                            >
                                {status === 'sending' ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <FaPaperPlane />
                                    </>
                                )}
                            </motion.button>

                            {status === 'success' && (
                                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-bold text-center mt-4">Message sent successfully!</motion.p>
                            )}
                            {status === 'error' && (
                                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-500 font-bold text-center mt-4">Failed to send message. Please try again.</motion.p>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
