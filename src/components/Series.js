import { useEffect, useState } from "react";
import Navegação from "../navegação/Navegação";
import Busca from "../navegação/Busca";

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagina, setPagina] = useState(1);
  const [buscaSeries, setBuscaSeries] = useState("");
  const [termoDigitado, setTermoDigitado] = useState("");
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const itemClick = (filmes) => {
    setItemSelecionado(filmes);
  };

  useEffect(() => {
    const apiKey = "73ca8e7afee9b5b9f8e22ab7737ab498";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2NhOGU3YWZlZTliNWI5ZjhlMjJhYjc3MzdhYjQ5OCIsIm5iZiI6MS43NDYyMzEzNTg2NDk5OTk5ZSs5LCJzdWIiOiI2ODE1NjAzZWNkNDg3ZDYxODkwODliMTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eYAz6x0yjaSQ4Mt7_kthE6x04HmqAvuOnkXHtYI01t0",
      },
    };
    const fetchSeries = async () => {
      setLoading(true);

      const url = buscaSeries
        ? `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(
            buscaSeries
          )}&language=pt-BR&page=${pagina}&api_key=${apiKey}`
        : `https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=${pagina}&api_key=${apiKey}`;

      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error("Falha na requisição");
        }
        const data = await res.json();
        setSeries(data.results || []);
      } catch (erro) {
        setError(erro.message); // Setando erro caso haja algum
        console.error("Erro na requisição:", erro);
      } finally {
        setLoading(false); // Garantir que o carregamento seja sempre removido
      }
    };

    fetchSeries();
  }, [pagina, buscaSeries]);

  if (loading) {
    return <div>Carregando series...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error}</div>; // Exibe erro, se houver
  }

  return (
    <div className="w-screen">
      <Busca
        setPagina={setPagina}
        setBusca={setBuscaSeries}
        termoDigitado={termoDigitado}
        setTermoDigitado={setTermoDigitado}
      />
      <div className="w-full my-10">
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {!loading && series.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum filme encontrado.</p>
        ) : (
          series.map((serie) => (
            <div
              key={serie.id}
              className=" w-32 h-auto bg-gray-300 dark:bg-red-900 rounded-lg transform hover:scale-105 transition duration-300 text-center cursor-pointer"
              onClick={() => itemClick(serie)}
            >
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.name}
                  className="w-full h-auto"
                />
                <h2 className="p-1 text-center h-14 flex items-center justify-center text-base font-title">{serie.name}</h2>
              </div>
            </div>
            
          ))
        )}
      </div>
      </div>
      {itemSelecionado && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setItemSelecionado(null)}
        >
          {itemSelecionado && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              onClick={() => setItemSelecionado(null)}
            >
              <div className="bg-white dark:bg-fundoCard p-6 rounded-lg shadow-lg w-[90%] max-w-4xl h-auto max-h-[80vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-4 text-center">
                  {itemSelecionado.name}
                </h2>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w400${itemSelecionado.poster_path}`}
                    alt={itemSelecionado.name}
                    className="w-full md:w-56 mt-4 rounded"
                  />
                  <p className="text-justify text-sm md:text-base mt-4">
                    <strong>Descrição:</strong> {itemSelecionado.overview}
                  </p>
                </div>
                <p className="mt-4">
                  <strong>Lançamento:</strong>{" "}
                  {new Date(itemSelecionado.first_air_date).toLocaleDateString(
                    "pt-BR"
                  )}
                </p>
                <p>
                  <strong>Média:</strong>{" "}
                  {itemSelecionado.vote_average?.toFixed(1)}
                </p>
                <button
                  onClick={() => setItemSelecionado(null)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <Navegação pagina={pagina} setPagina={setPagina} />
    </div>
  );
}

export default Series;
