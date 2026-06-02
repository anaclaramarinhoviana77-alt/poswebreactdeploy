import { useState } from "react";

import Texto_Escuro from "../TextoEscuro";
import Card from "../CardTopo/Card";
import TituloTabela from "../TituloTabela";
import TituloTopo from "../TituloTopo";
import ControleLista from "../ControleLista";
import Tabela from "../Tabela";  
import { alunosMock } from "../Tabela/Alunomock"; 
 

export default function Modelo({ children }) {
  const [pesquisa, setPesquisa] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);

   // Configuração das colunas para alunos
  const colunasAlunos = [
    { titulo: "MATRÍCULA", campo: "matricula", tipo: "texto" },
    { titulo: "NOME DO ALUNO", campo: "nome", tipo: "foto" },
    { titulo: "EMAIL", campo: "email", tipo: "texto" },
    { titulo: "CURSO", campo: "curso", tipo: "texto" },
    { titulo: "STATUS", campo: "status", tipo: "status" },
    { titulo: "DATA MATRÍCULA", campo: "dataMatricula", tipo: "texto" },
    { titulo: "AÇÕES", campo: "acoes", tipo: "acoes" },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">

        {/* ===== HEADER DA LISTA ===== */}
        <div className="flex justify-between items-start">
          <TituloTopo
            titulo="Lista de Alunos"
            subtitulo="Gerencie e visualize todos os alunos matriculados"
          />

          <ControleLista
            pesquisa={pesquisa}
            onPesquisa={(e) => setPesquisa(e.target.value)}
            onFiltro={() => console.log("filtro")}
            onExportar={() => console.log("exportar")}
            placeholderPesquisa="Buscar aluno..."
          />
        </div>

        <div className="flex flex-col gap-6">
          {children}
        </div>

        {/* ===== CARDS RESUMO ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            titulo="Total de Alunos"
            valor="1,247"
            corTexto="text-blue-500"
            corBg="bg-blue-500/20"
            icone="👥"
          />
          <Card
            titulo="Ativos"
            valor="1,198"
            corTexto="text-green-500"
            corBg="bg-green-500/20"
            icone="✅"
          />
          <Card
            titulo="Inativos"
            valor="49"
            corTexto="text-red-500"
            corBg="bg-red-500/20"
            icone="❌"
          />
          <Card
            titulo="Novos este mês"
            valor="87"
            corTexto="text-purple-500"
            corBg="bg-purple-500/20"
            icone="⭐"
          />
        </div>



        {/* ===== PAGINAÇÃO / TABELA INFO ===== */}
        <div className="flex flex-col gap-0">
        <TituloTabela
          titulo="Alunos Matriculados"
          paginaAtual={paginaAtual}
          totalPaginas={3}
          totalRegistros={1247}
          inicio={1}
          fim={10}
          onPaginaChange={setPaginaAtual}
        />
       
        {/* ===== TABELA DE ALUNOS ===== */}
        
          <Tabela 
          dados={alunosMock}
          colunas={colunasAlunos}
          chaveSelecao="matricula"
        />
        </div>

        {/* ===== CONTEÚDO DINÂMICO ===== */}
        <div className="flex flex-col gap-6">
          {children}
        </div>

      </div>
    </div>
  );
}
