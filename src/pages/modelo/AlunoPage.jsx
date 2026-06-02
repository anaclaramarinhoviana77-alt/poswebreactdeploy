import { useEffect, useState, useMemo } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";
import { useNavigate } from "react-router-dom";

import { buscarAlunos, excluirAluno } from "./alunos.service";
import { colunasAlunos } from "./alunos.columns";

export default function AlunoPage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // =============================
  // CARREGAR ALUNOS
  // =============================
  useEffect(() => {
    async function carregarAlunos() {
      try {
        setLoading(true);
        const alunos = await buscarAlunos();
        setDados(alunos);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error.response?.data || error.message);
        alert("Erro ao carregar alunos");
      } finally {
        setLoading(false);
      }
    }

    carregarAlunos();
  }, []);

  // =============================
  // DELETE
  // =============================
  async function handleDelete(matricula) {
    const confirmar = window.confirm("Tem certeza que deseja excluir este aluno?");
    if (!confirmar) return;

    try {
      await excluirAluno(matricula);

      // Atualização otimista (remove da lista sem recarregar página)
      setDados((prev) =>
        prev.filter((aluno) => aluno.matricula !== matricula)
      );
    } catch (error) {
      console.error("Erro ao excluir:", error.response?.data || error.message);
      alert("Erro ao excluir aluno");
    }
  }

  // =============================
  // FILTRO DE PESQUISA (CLIENT SIDE)
  // =============================
  const dadosFiltrados = useMemo(() => {
    if (!pesquisa.trim()) return dados;

    const termo = pesquisa.toLowerCase();

    return dados.filter((aluno) =>
      aluno.nome?.toLowerCase().includes(termo) ||
      aluno.email?.toLowerCase().includes(termo) ||
      aluno.matricula?.toString().includes(termo)
    );
  }, [dados, pesquisa]);

  return (
      <ListagemLayout
        titulo="Lista de Alunos"
        subtitulo="Gerencie e visualize todos os alunos matriculados"
        placeholderPesquisa="Buscar aluno..."
        pesquisa={pesquisa}
        onPesquisa={(e) => setPesquisa(e.target.value)}
        onAdicionar={() => navigate("/alunos/novo")}
        textoBotao="Novo Aluno"
      >
      <TituloTabela
        titulo="Alunos Matriculados"
        paginaAtual={paginaAtual}
        totalPaginas={1}
        totalRegistros={dadosFiltrados.length}
        inicio={dadosFiltrados.length > 0 ? 1 : 0}
        fim={dadosFiltrados.length}
        onPaginaChange={setPaginaAtual}
      />

      {loading ? (
        <p className="p-6">Carregando...</p>
      ) : (
        <Tabela
          dados={dadosFiltrados}
          colunas={colunasAlunos}
          chaveSelecao="matricula"
          onAcaoClick={(acao, item) => {
            if (acao === "visualizar") {
              navigate(`/modelo/${item.matricula}`);
            }

            if (acao === "editar") {
              navigate(`/modelo/${item.matricula}/editar`);
            }

            if (acao === "excluir") {
              handleDelete(item.matricula);
            }
          }}
        />
      )}
    </ListagemLayout>
  );
}