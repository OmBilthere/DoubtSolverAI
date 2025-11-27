import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-14 px-4 border-b border-gray-800 bg-[#0d0d0d] flex items-center justify-between">
   
      <div className="text-lg font-semibold text-gray-200 tracking-wide">
        DoubtCracker
      </div>

   
      <nav className="flex items-center gap-2">
        <Link
          to="/"
          className="text-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-800 hover:text-white transition"
        >
          Home
        </Link>

        <Link
          to="/history"
          className="text-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-800 hover:text-white transition"
        >
          History
        </Link>
      </nav>
    </header>
  );
}


export default Header;
