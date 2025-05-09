
function Navegação({pagina, setPagina}) {

    const proximaPagina = () => setPagina(pagina + 1)
    const paginaAnterior = () => setPagina(pagina => (pagina > 1 ? pagina - 1 : 1))

    return(
        <div class="flex justify-center mt-4 gap-10 pb-32">
            <button class="bg-destaque text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300" onClick={paginaAnterior}>Pagina Anterior</button>
            <button class="bg-destaque text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300" onClick={proximaPagina}>Proxima Pagina</button>
        </div>
    )
}

export default Navegação;