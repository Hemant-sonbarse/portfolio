"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "feather-icons-react";
import Image from "next/image";
import { ArrowRight } from "feather-icons-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveHash = () => {
      const hash = window.location.hash || '#home';
      setActiveHash(hash);
    };
    window.addEventListener('hashchange', updateActiveHash);
    updateActiveHash(); 
    return () => window.removeEventListener('hashchange', updateActiveHash);
  }, []);

  const links = ["Home", "About", "Skills", "Work", "Contact"];

  const handleLinkClick = (l) => {
    setMenuOpen(false);
    setActiveHash(`#${l.toLowerCase()}`);
  }

  const linkBaseClass = "text-base font-medium px-4 py-2 rounded-lg transition-all duration-200";
  
  const getLinkClass = (l) => {
    const href = `#${l.toLowerCase()}`;
    const isActive = href === activeHash;

    if (isActive) {
      return `${linkBaseClass} text-white bg-cyan-600/70 shadow-lg shadow-cyan-500/10`;
    } else {
      return `${linkBaseClass} text-muted hover:bg-white/10 hover:text-white`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-6 transition duration-300 ${
        scrolled ? "bg-bgDark/90 backdrop-blur border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* Profile Info */}
        <Link href="/" className="flex items-center gap-3 p-1">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/assets/your-photo.jpg"
              alt="Hemant Sonbarse"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-white text-base leading-none">
              Hemant Sonbarse
            </span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <nav className="hidden md:flex gap-2 items-center">
          {links.map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => handleLinkClick(l)}
              className={getLinkClass(l)}
            >
              {l}
            </Link>
          ))}
          
          {/* GRADIENT RESUME BUTTON */}
          <Link
            href="/assets/Hemant_Sonbarse_Resume.pdf"
            target="_blank"
            className="ml-4 px-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-400 hover:to-indigo-400 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 flex items-center gap-2 group"
          >
            Resume
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <Icon icon={menuOpen ? "x" : "menu"} size={28} />
        </button>

        {/* Mobile Menu Overlay */}
        <nav
          className={`fixed top-0 right-0 h-screen w-2/3 bg-bgCard backdrop-blur-md transition-transform duration-300 z-40 p-8 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col space-y-8 pt-24">
            {links.map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => handleLinkClick(l)}
                className="text-2xl font-bold text-white hover:text-cyan-400 transition"
              >
                {l}
              </Link>
            ))}
            
            {/* Mobile Gradient Resume Button */}
            <Link
              href="/assets/Hemant_Sonbarse_Resume.pdf"
              target="_blank"
              onClick={() => handleLinkClick("Resume")}
            className="mt-6 px-6 py-3 rounded-lg font-semibold text-white text-center bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-400 hover:to-indigo-400 shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2"
            >
              Resume
              <ArrowRight size={20} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}