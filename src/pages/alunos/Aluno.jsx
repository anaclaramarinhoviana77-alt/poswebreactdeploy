import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasAlunos } from "./alunos.columns";
import { buscarAlunos } from "./alunos.service";

export default function Aluno() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarAlunos() {
      try {
        setLoading(true);
        const alunos = await buscarAlunos();
        setDados(alunos);

      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarAlunos();
  }, []);

  return (
    <ListagemLayout
      titulo="Lista de Alunos"
      subtitulo="Gerencie e visualize todos os alunos matriculados"
      placeholderPesquisa="Buscar aluno..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
    >
      <TituloTabela
        titulo="Alunos Matriculados"
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
          colunas={colunasAlunos}
          chaveSelecao="matricula"
        />
      )}
    </ListagemLayout>
  );
}