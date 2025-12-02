export default function Footer() {
  return (
    <footer className="w-full py-6 bg-[#050507] border-t border-white/5">
      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-cyan-400">Krishna Manocha</span> — Built with React
      </p>
    </footer>
  );
}