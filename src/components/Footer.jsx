function Footer() {
  return (
    <footer className="w-full py-4 border-t border-gray-800 bg-[#0d0d0d] text-center mt-4">
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} DoubtCracker · Built with ❤️ for students
      </p>

      <div className="flex justify-center gap-4 mt-1 text-xs text-gray-600">
        <a
          href="#"
          className="hover:text-gray-300 transition"
        >
          Privacy
        </a>
        <a
          href="#"
          className="hover:text-gray-300 transition"
        >
          Terms
        </a>
        <a
          href="#"
          className="hover:text-gray-300 transition"
        >
          About
        </a>
      </div>
    </footer>
  );
}

export default Footer;
