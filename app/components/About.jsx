"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADLINE - Matching Projects section styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From engineering graduate to data storyteller - my journey in turning data into impact
          </p>
        </motion.div>

        {/* PHOTO AND CONTENT SIDE BY SIDE */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* PHOTO - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start w-full md:w-auto"
          >
            <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-cyan-400/20 shadow-lg flex-shrink-0">
              <Image
                src="/assets/your-photo.jpg"
                alt="Hemant Sonbarse"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* CONTENT CARD - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-bgCard border border-border rounded-xl p-8 shadow-lg flex-1"
          >
            <div className="text-left">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I'm a data analyst who turns curiosity into insight. With a background in <span className="text-cyan-400 font-semibold">Electronics & Communication</span>, I bring an analytical mindset and a storyteller's instinct to every dataset I explore.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I love uncovering patterns, connecting numbers to narratives, and transforming raw data into decisions that make a difference. My approach blends technical precision with creative problem-solving — because data, when understood deeply, is just another way of understanding people.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                When I'm not immersed in <span className="text-cyan-400 font-semibold">SQL queries</span> or <span className="text-cyan-400 font-semibold">Power BI visuals</span>, you'll find me on the badminton court or experimenting in the kitchen, driven by the same spirit of exploration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}