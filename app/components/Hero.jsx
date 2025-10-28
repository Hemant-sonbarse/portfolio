"use client";
import Image from "next/image";
import Btn from "./Btn";
import { motion } from "framer-motion";

const tech = ["Python", "SQL", "Excel", "Power BI", "Tableau"];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-16 pt-28 pb-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT – text + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
      
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              // Use the largest, black font for the main introduction
              className="text-5xl md:text-7xl font-black text-white leading-tight"
            >
              Hi, I'm Hemant Sonbarse.
            </motion.h1>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              // Use the size and gray color intended for the secondary title
              className="text-5xl md:text-7xl font-black text-gray-400 leading-tight"
            >
              I turn data into actionable decisions
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            A data analyst based in Nagpur, India — transforming messy datasets 
            into impactful insights with Python, SQL & visual tools you actually want to use.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <Btn href="#work">View My Work</Btn>
            <Btn href="/assets/Hemant_Sonbarse_Resume.pdf" target="_blank">Download CV</Btn>
          </motion.div>
        </motion.div>

        {/* RIGHT – GIF + tags BELOW */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg hover:border-cyan-500/30 transition-all duration-300">
            <Image
              src="/assets/coding.gif"
              alt="coding animation"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-center text-sm font-bold text-gray-400 mb-6 tracking-widest uppercase">
              Core Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tech.map((t, idx) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7  }}
                  className="px-3 py-1 text-xs font-mono  bg-cyan-400/10 text-cyan-400 rounded"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}