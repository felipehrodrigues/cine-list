function Busca({ setPagina, setBusca, termoDigitado, setTermoDigitado, setBuscaSeries }) {
  const buscar = () => {
    setPagina(1);
    setBusca(termoDigitado.trim());
  };


  return (
    <div className="w-screen mt-24 flex justify-center px-8" >
      <input className="text-black p-2 border rounded w-full max-w-md placeholder-gray-400"
        type="text"
        placeholder="Digite sua pesquisa..."
        value={termoDigitado}
        onChange={(e) => setTermoDigitado(e.target.value)}
      />
      <button className="bg-destaque text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 w-40" onClick={buscar}>Buscar</button>
    </div>
  );
}
export default Busca;
