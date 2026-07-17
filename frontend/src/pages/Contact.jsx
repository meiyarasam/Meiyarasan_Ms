import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            // Only allow letters and spaces
            const regex = /^[a-zA-Z\s]*$/;
            if (!regex.test(value)) {
                return;
            }
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch("https://formsubmit.co/ajax/meiyarasanmeiyarasan3@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Message from ${formData.name}`
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error("Failed to send message");
            }
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
                    className="text-4xl font-black text-secondary mb-16 text-center uppercase tracking-wider"
                >
                    Get In <span className="text-primary bg-secondary px-3 py-1 border-[3px] border-secondary shadow-brutal-sm inline-block select-none ml-1">Touch</span>
                </motion.h2>

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
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Contact Info */}
                    <motion.div
                        variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } } }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-black text-secondary mb-6 uppercase tracking-tight">Let's Connect</h3>
                        <p className="text-secondary/70 font-bold mb-8 text-lg leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="flex items-center space-x-4">
                            <a href="https://wa.me/916374424989" target="_blank" rel="noopener noreferrer">
                                <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="w-12 h-12 bg-primary border-[3px] border-secondary shadow-brutal-sm flex items-center justify-center text-secondary rounded-none flex-shrink-0 cursor-pointer">
                                    <FaPhone size={18} />
                                </motion.div>
                            </a>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone</p>
                                <a href="https://wa.me/916374424989" target="_blank" rel="noopener noreferrer" className="font-black text-secondary hover:text-primary transition-colors">
                                    6374424989
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <motion.div whileHover={{ scale: 1.1, rotate: -10 }} className="w-12 h-12 bg-primary border-[3px] border-secondary shadow-brutal-sm flex items-center justify-center text-secondary rounded-none flex-shrink-0">
                                <FaEnvelope size={18} />
                            </motion.div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email</p>
                                <a href="mailto:meiyarasanmeiyarasan3@gmail.com" className="font-black text-secondary hover:text-primary transition-colors">
                                    meiyarasanmeiyarasan3@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <motion.div whileHover={{ scale: 1.1, y: -5 }} className="w-12 h-12 bg-primary border-[3px] border-secondary shadow-brutal-sm flex items-center justify-center text-secondary rounded-none flex-shrink-0">
                                <FaMapMarkerAlt size={18} />
                            </motion.div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
                                <p className="font-black text-secondary">Krishnagiri, Tamil Nadu, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } } }}
                        className="bg-white p-8 border-[3px] border-secondary shadow-brutal rounded-none"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-black text-secondary mb-2 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border-2 border-secondary focus:bg-primary/5 focus:outline-none text-secondary placeholder-gray-500 font-bold transition-all rounded-none"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-black text-secondary mb-2 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border-2 border-secondary focus:bg-primary/5 focus:outline-none text-secondary placeholder-gray-500 font-bold transition-all rounded-none"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-black text-secondary mb-2 uppercase tracking-widest">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white border-2 border-secondary focus:bg-primary/5 focus:outline-none text-secondary resize-none placeholder-gray-500 font-bold transition-all rounded-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full bg-primary text-secondary hover:bg-secondary hover:text-primary font-black py-4 border-[3px] border-secondary shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-sm transition-all flex items-center justify-center space-x-2 uppercase tracking-widest rounded-none"
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
