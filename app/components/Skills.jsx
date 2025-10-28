"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", pct: 85, color: "bg-gradient-to-r from-blue-500 to-sky-400" },
  { name: "SQL", pct: 80, color: "bg-gradient-to-r from-purple-400 to-pink-500" },
  { name: "Power BI", pct: 70, color: "bg-gradient-to-r from-indigo-400 to-purple-500" },
  { name: "Tableau", pct: 65, color: "bg-gradient-to-r from-green-700 to-emerald-500" },
  { name: "Excel", pct: 80, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* HEADLINE - Matching Projects section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Technical proficiencies and tools I use to transform data into insights
          </p>
        </motion.div>

        {/* SKILLS CONTAINER - Reduced padding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-bgCard border border-border rounded-xl p-6 shadow-lg"
        >
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between mb-1 text-sm font-semibold text-off-white">
                  <span>{skill.name}</span>
                  <span>{skill.pct}%</span>
                </div>
                
                {/* PROGRESS BAR CONTAINER - Original styling */}
                <div className="w-full bg-bgDark rounded-full h-3 overflow-hidden border border-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-3 rounded-full ${skill.color} glow`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ADDITIONAL SKILLS PILLS - Reduced padding */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 pt-4 border-t border-border"
          >
            <p className="text-gray-400 text-sm font-mono mb-3 text-center">Also proficient in:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Pandas", "NumPy", "Scikit-learn", "Jupyter", "Data Analysis", "Data Visualization"].map((skill) => (
                <span 
                  key={skill} 
                  className="text-xs font-mono px-3 py-1 bg-white/5 text-gray-300 rounded border border-cyan-400/20 hover:border-cyan-400/40 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}