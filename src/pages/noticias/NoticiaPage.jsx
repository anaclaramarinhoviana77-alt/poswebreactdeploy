import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasNoticias } from "./noticias.columns";
import { getNoticias } from "./noticias.service";

export default function NoticiaPage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarNoticias() {
      try {
        setLoading(true);
        const noticias = await getNoticias();
        setDados(noticias);

      } catch (error) {
        console.error("Erro ao buscar noticias:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarNoticias();
  }, []);

  return (
    <ListagemLayout
      titulo="Lista de Notícias"
      subtitulo="Gerencie e visualize todas as notícias cadastradas"
      placeholderPesquisa="Buscar notícia..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
    >
      <TituloTabela
        titulo="Notícias"
        paginaAtual={paginaAtual}
        totalPaginas={1}
        totalRegistros={dados.length}
        inicio={1}
        fim={dados.length}
        onPaginaChange={setPaginaAtual}
      />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Tabela
          dados={dados}
          colunas={colunasNoticias}
          chaveSelecao="id"
        />
      )}
    </ListagemLayout>
  );
}
