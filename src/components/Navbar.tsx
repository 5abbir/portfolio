import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          Sabbir<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="/#about" className="hover:text-blue-400 transition">
            About
          </a>

          <Link to="/post" className="hover:text-blue-400 transition">
            Post
          </Link>

          <a href="/#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="/#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="/#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
