import Titulo_Escuro from "../TituloEscuro";

export default function TituloTabela({
  titulo,
  paginaAtual,
  totalPaginas,
  totalRegistros,
  inicio,
  fim,
  onPaginaChange,
}) {
  return (
    //<div className="max-w-6xl mx-auto mt-10">
    //troquei a de cima pela de baixo
    <div className="mt-10">
    <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-t-xl px-6 py-1">
      
      <Titulo_Escuro>
        <span className="text-2xl font-semibold">
        {titulo}
        </span>
      </Titulo_Escuro>

      <div className="flex items-center gap-4">
        
        <span className="text-base text-gray-500">
          Mostrando {inicio}-{fim} de {totalRegistros}
        </span>

        <div className="flex items-center gap-2">
          
          <button
            onClick={() => onPaginaChange(paginaAtual - 1)}
            disabled={paginaAtual === 1}
            className="px-3 py-1 text-base border border-gray-300 rounded-md bg-gray-50"
          >
            Anterior
          </button>

          {Array.from({ length: totalPaginas }, (_, index) => (
            <button
              key={index}
              onClick={() => onPaginaChange(index + 1)}
              className={`px-3 py-1 text-base rounded-md ${
                paginaAtual === index + 1
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => onPaginaChange(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
            className="px-3 py-1 text-base border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
          >
            Próximo
          </button>

        </div>
      </div>
    </div>
    </div>
  );
}
