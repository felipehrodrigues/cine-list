import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between bg-destaque px-6 py-4 w-full">
      {/* Logo */}
      <Link to="/">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Cine List</h2>
      </Link>

      {/* Links de navegação */}
      <div className="flex gap-6 text-xl sm:text-2xl text-white mt-2 sm:mt-0">
        <Link to="/Filmes">
          <h2 className="transition duration-300 hover:underline">Filmes</h2>
        </Link>
        <Link to="/Series">
          <h2 className="transition duration-300 hover:underline">Séries</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
