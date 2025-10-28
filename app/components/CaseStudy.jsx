"use client";
import { motion } from "framer-motion";
import Icon from "feather-icons-react";

// Add color mapping for card backgrounds based on project
const colorMap = {
  "Uber Rides Analysis": "bg-blue-600",
  "Hospital Wait-list Dashboard": "bg-green-600",
  "HR Analytics Dashboard": "bg-purple-600",
};

export default function CaseStudy({ title, desc, thumb, tools, dashboard, github, kpis }) {
  // Determine the top header color class
  const headerColorClass = colorMap[title] || "bg-gray-600";
  const icon = title.includes("Uber") ? "truck" : title.includes("Hospital") ? "activity" : "users"; // Simple icon logic

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="block rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 h-full"
    >
      <div className={`p-5 h-40 flex-col justify-between ${headerColorClass} text-white`}>
        {/* Top Status Tags */}
        <div className="flex justify-between text-sm font-semibold">
          <span>Completed</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full">Featured</span>
        </div>
        
        {/* Icon and Title */}
        <div className="flex items-center gap-4 mt-auto">
          <Icon icon={icon} size={36} className="text-white" />
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>
      
      {/* Detailed Card Body */}
      <div className="p-5 bg-bgCard/90 flex flex-col justify-between h-full">
        {/* Tags, Title, and Description */}
        <div>
          <p className="text-xs text-cyan-400 font-mono mb-2">{tools.join(' / ')}</p> 
          <h4 className="font-bold text-xl mb-3 text-white">{title}</h4>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{desc}</p>
          <p className="text-xs text-muted mb-4">
             {/* Simple KPI/Duration placeholder */}
             {kpis && kpis[0]} • 4 months
          </p>
        </div>
        
        {/* Footer Links */}
        <div className="flex justify-start gap-6 pt-3 border-t border-white/5">
          {/* Link 1: Project Details (Dashboard) */}
          <a href={dashboard} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 text-sm font-semibold hover:text-white transition">
            <Icon icon="file-text" size={16} />
            View Dashboard
          </a>
          
          {/* Link 2: GitHub (View Code) */}
          <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-muted text-sm hover:text-white transition">
            <Icon icon="github" size={16} />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}