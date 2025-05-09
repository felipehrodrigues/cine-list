import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-8 overflow-hidden min-h-screen">
      <div className="mt-40">
        <h1 className="text-6xl font-title">Cine List</h1>
        <h2 className="text-4xl m-6 font-title"> 🍿 Pronto pra maratonar? </h2>
        <p className="text-2xl italic mt-4 font-title">
          Veja o que está bombando, conheça lançamentos e encontre seu próximo
          vício em filmes e séries!
        </p>
      </div>

      <div class="flex justify-center gap-2 mt-8 flex-wrap">
        <Link to="/Filmes">
          <button class="bg-destaque w-48 h-16 text-white mx-8 px-4 py-2 rounded-md hover:bg-red-500 transition duration-300">
            Filmes
          </button>
        </Link>
        <Link to="/Series">
          <button class="bg-destaque w-48 h-16 text-white mx-8 px-4 py-2 rounded-md hover:bg-red-500 transition duration-300">
            Séries
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
