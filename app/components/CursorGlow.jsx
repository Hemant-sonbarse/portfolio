"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      className="pointer-events-none fixed -inset-40 z-0 hidden lg:block"
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(34, 211, 238, 0.15), transparent 80%)`,
      }}
    />
  );
}