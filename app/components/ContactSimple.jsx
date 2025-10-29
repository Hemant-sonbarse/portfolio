"use client";
import { motion } from "framer-motion";

export default function ContactSimple() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
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

        <div className="text-center">
          <p className="text-gray-300 text-lg mb-6">
            Feel free to reach out via email or LinkedIn.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:hemantsonbarse@gmail.com" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition font-semibold">
              Email Me
            </a>
            <a href="https://linkedin.com/in/HemantSonbarse" target="_blank" className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400/10 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
