import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasInscricoes } from "./inscricoes.columns";
import { buscarInscricoes, buscarInscricaoPorId} from "./inscricoes.service";

export default function InscricoesPage(){
      const { id } = useParams();
      const navigate = useNavigate();
      const [dados, setDados] = useState([]);
      const [inscricao, setInscricao] = useState(null);
      const [paginaAtual, setPaginaAtual] = useState(1);
      const [pesquisa, setPesquisa] = useState("");
      const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function carregarInscricoes() {
          try {
            setLoading(true);
            if(id){
              const dadosPoId = await buscarInscricaoPorId(id);
              setInscricao(dadosPoId);
            } 
            else{
              const Inscricoes = await buscarInscricoes();
              setDados(Inscricoes);
            }
    
          } catch (error) {
            console.error("Erro ao buscar Inscricoes:", error);
          } finally {
            setLoading(false);
          }
        }
    
        carregarInscricoes();
      }, [id]);

      if (loading) return <p>Carregando...</p>;

      if (id && inscricao) {
      return (
        <ListagemLayout
          titulo="Detalhes da Inscrição"
          subtitulo={`Visualizando inscrição de código ${id}`}
          placeholderPesquisa="inscrição"
          pesquisa={pesquisa}
          onPesquisa={(e) => setPesquisa(e.target.value)}
        >
          <TituloTabela
            titulo="Dados da Inscrição"
            paginaAtual={1}
            totalPaginas={1}
            totalRegistros={1}
            inicio={1}
            fim={1}
            onPaginaChange={() => {}}
          />

          <div className="bg-white p-6 rounded shadow mt-4">
            <p><strong>Nome do Aluno:</strong> {inscricao.nome}</p>
            <p><strong>Email:</strong> {inscricao.email}</p>
            <p><strong>Status:</strong> {inscricao.status}</p>

            <button
              onClick={() => navigate("/inscricoes")}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Voltar
            </button>
          </div>
        </ListagemLayout>
      );
    }

      
      return (
        <ListagemLayout
          titulo="Lista de Inscrições"
          subtitulo="Gerencie e visualize as inscrições"
          placeholderPesquisa="inscrição"
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
            colunas={colunasInscricoes}
            chaveSelecao="inscricao"
            onAcaoClick={(item) => navigate(`/inscricoes/${item.id}`)}
          />

          )}
        </ListagemLayout>
      );
}