import TituloTopo from "../components/TituloTopo";
import ControleLista from "../components/ControleLista";
import Card from "../components/CardTopo/Card";

export default function ListagemLayout({
  titulo,
  subtitulo,
  placeholderPesquisa,
  pesquisa,
  onPesquisa,
  cards,
  onAdicionar,
  textoBotao = "Adicionar",
  children
}) {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">

        {/* TÍTULO */}
        <TituloTopo titulo={titulo} subtitulo={subtitulo} />

        {/* LINHA CONTROLE (BUSCAR + FILTRAR + ADICIONAR) */}
        <div className="flex justify-between items-center flex-wrap gap-4">

          <ControleLista
            pesquisa={pesquisa}
            onPesquisa={onPesquisa}
            placeholderPesquisa={placeholderPesquisa}
          />

          {onAdicionar && (
            <button
              onClick={onAdicionar}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition-all duration-200 hover:shadow-md"
            >
              + {textoBotao}
            </button>
          )}

        </div>

        {/* CARDS (SE EXISTIREM) */}
        {cards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        )}

        {/* CONTEÚDO PRINCIPAL */}
        {children}

      </div>
    </div>
  );
}