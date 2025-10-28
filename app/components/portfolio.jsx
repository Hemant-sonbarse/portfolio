"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "../../content/projects.json";
import { motion } from "framer-motion"; 

// Container variant for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Reduced stagger
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Portfolio() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-[90rem] mx-auto">
        {/* HEADLINE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-400 mx-auto">
            A showcase of data-driven solutions delivering operational efficiency and revenue optimization.
          </p>
        </div>

        {/* CARDS GRID with container animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                y: -3,
                transition: { duration: 0.2 }
              }} 
              className="bg-bgCard border border-border rounded-xl p-6 hover:border-cyan transition shadow-lg cursor-pointer group" 
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-60 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={p.thumb}
                  alt={p.title}
                  fill
                  className="object-cover transition duration-200 group-hover:scale-105"
                />
              </div>

              {/* TITLE & DESC */}
              <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{p.desc}</p>

              {/* TOOLS */}
              <div className="flex flex-wrap gap-1 mb-3">
                {p.tools.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-white/5 text-gray-300 rounded">
                    {t}
                  </span>
                ))}
              </div>
                
                {/* ACTIONS - Project Details Button */}
                <div className="flex items-center justify-start mt-4">
                <Link
                    href={p.github}
                    target="_blank"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:underline transition font-medium group"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="group-hover:scale-110 transition-transform">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Project Details
                </Link>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}