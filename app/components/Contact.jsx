"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({});
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      alert("Message sent successfully! ✅");
      setForm({}); // Clear form
      e.target.reset(); // Reset form fields
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADLINE - Matching Projects section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ready to turn data into decisions? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-bgCard border border-border rounded-xl p-6 shadow-lg"
          >
            {/* UPDATED FORM WITH NETLIFY ATTRIBUTES */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              {/* NETLIFY HIDDEN FIELDS */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div>
                <input 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-bgDark border border-border rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition"
                />
              </div>
              
              <div>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-bgDark border border-border rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition"
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  rows={4} 
                  placeholder="Your Message" 
                  required 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-bgDark border border-border rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 resize-none transition"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition font-semibold shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO - Without big box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-black text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                I'd love to hear from you. Reach out and let's talk data, projects, or opportunities.
              </p>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400 font-semibold text-xl">📍</span>
                <span>Nagpur, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400 font-semibold text-xl">📞</span>
                <a href="tel:+919561893499" className="hover:text-cyan-400 transition">+91-9561893499</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400 font-semibold text-xl">✉️</span>
                <a href="mailto:hemantsonbarse@gmail.com" className="hover:text-cyan-400 transition">hemantsonbarse@gmail.com</a>
              </li>
            </ul>

            {/* SOCIAL LINKS WITH ICONS */}
            <div className="pt-4">
              <p className="text-gray-400 text-sm font-mono mb-4">Find me online</p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/HemantSonbarse" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 rounded-lg hover:border-cyan-400 transition hover:scale-110"
                >
                  {/* LinkedIn Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Hemant-sonbarse" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 rounded-lg hover:border-cyan-400 transition hover:scale-110"
                >
                  {/* GitHub Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}