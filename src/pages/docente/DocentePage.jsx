import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasDocentes } from "./docente.columns";
import { buscarDocentes } from "./docente.service";

export default function DocentePage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarDocentes() {
      try {
        setLoading(true);
        const docentes = await buscarDocentes();
        setDados(docentes);

      } catch (error) {
        console.error("Erro ao buscar Docente:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDocentes();
  }, []);

  return (
    <ListagemLayout
      titulo="Lista de Docentes"
      subtitulo="Gerencie e visualize todos os docentes cadastrados"
      placeholderPesquisa="Buscar docente..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
    >
      <TituloTabela
        titulo="Docentes Cadastrados"
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
          colunas={colunasDocentes}
          chaveSelecao="id"
        />
      )}
    </ListagemLayout>
  );
}
