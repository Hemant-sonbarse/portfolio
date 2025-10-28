"use client";
import { motion } from "framer-motion";

export default function ProjectsHeader() {
  const stats = [
    { value: "15", label: "Projects Completed" },
    { value: "3", label: "Industries Covered" },
    { value: "AI/ML Specialist", label: "Analytics Specialist" },
];



  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-black text-white mb-4">
        My Projects
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
        A showcase of high-impact data solutions, from revenue analysis to process optimization.
      </motion.p>


      {/* Filter Buttons (Visual Only) */}
      {/*<motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center flex-wrap gap-4 p-2 bg-bgCard/70 rounded-xl max-w-max mx-auto border border-white/10"
      >
        {filters.map((f, index) => (
          <button
            key={f}
            // Use 'All' button for the active/selected style
            className={`px-4 py-2 text-sm rounded-lg transition-all ${
              f === "All"
                ? "bg-cyan-600/70 text-white font-semibold shadow-md shadow-cyan-500/20"
                : "text-muted hover:bg-white/10 hover:text-white"
            }`}
          >
            {f} 
            {index > 0 && (<span className="ml-2 opacity-70"> • {3 - index}</span>
            )} 
          </button>
        ))}
      </motion.div>*/}
    </div>
  );
}