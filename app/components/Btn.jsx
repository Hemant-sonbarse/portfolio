export default function Btn({ href, children }) {
  const className = `
    inline-flex items-center gap-2 border border-cyan-500 text-cyan-500 px-5 py-2 rounded
    hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30
    transition-all duration-300
  `;
  return href ? (
    <a href={href} className={className}>{children}</a>
  ) : (
    <button className={className}>{children}</button>
  );
}