import "./globals.css";
import CursorGlow from "./components/CursorGlow";

export const metadata = {
  title: "Hemant Sonbarse – Data → Decisions → Impact",
  description: "A showcase of data-driven solutions delivering operational efficiency and revenue optimization",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-bgDark antialiased">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}