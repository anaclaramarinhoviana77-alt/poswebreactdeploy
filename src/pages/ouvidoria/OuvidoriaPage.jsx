import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";
import Titulo from "../../components/Titulo_branco"
import Subtitulo from "../../components/Subtitulo_branco";  

import { colunasOuvidoria } from "./ouvidoria.columns";
import { buscarOuvidorias } from "./ouvidoria.service";

export default function AlunoPage() {
  const [dados, setDados] = useState([]);
  const [dadosSelecionados, setDadosSelecionados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [visualizarOuvidoria, setVisualizarOuvidoria] = useState(false);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarOuvidorias() {
      try {
        setLoading(true);
        const alunos = await buscarOuvidorias();
        setDados(alunos);

      } catch (error) {
        console.error("Erro ao buscar ouvidorias:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarOuvidorias();
  }, []);

  return (
    <ListagemLayout
      titulo="Lista de Ouvidorias"
      subtitulo="Gerencie e visualize todos os Ouvidorias Enviadas"
      placeholderPesquisa="Buscar ouvidoria..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
    >
      <TituloTabela
        titulo="Ouvidorias Enviadas"
        paginaAtual={paginaAtual}
        totalPaginas={1}
        totalRegistros={dados.length}
        inicio={1}
        fim={dados.length}
        onPaginaChange={setPaginaAtual}

      />

      {visualizarOuvidoria && dadosSelecionados && (
              <div className="bg-white p-4 my-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <Titulo>Ouvidoria</Titulo>
                  <button
                    className="font-bold text-red-500 cursor-pointer" 
                    onClick={() => setVisualizarOuvidoria(false)}>X</button>
                </div>
                <h2><p>ID: {dadosSelecionados.id}</p> {dadosSelecionados.nome}</h2> 
                <br />
                <Subtitulo>{dadosSelecionados.texto}</Subtitulo>
              </div>
            )}

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Tabela
          dados={dados}
          colunas={colunasOuvidoria}
          chaveSelecao="id"
  

        />
      )}
    </ListagemLayout>

  );
}
