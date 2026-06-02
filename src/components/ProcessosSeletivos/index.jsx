import React from "react";
import CardTexto from "../CardTexto";

const processos = [
  {
    titulo: "Edital 001/2024",
    descricao: "Processo seletivo para ingresso no curso de Pós-Graduação em Desenvolvimento Web - Turma 2024.2.",
    status: "aberto",
    badgeColor: "bg-red-100 text-red-600",
    iconColor: "fill-red-600",
    linkColor: "text-green-800",
    shadowColor: "#006D38",
    deadline: "Inscrições até: 15/02/2024",
    linkText: "Ver Edital Completo",
    link: "#"
  },
  {
    titulo: "Edital 002/2024",
    descricao: "Seleção de Bolsistas para Projetos de Pesquisa e Extensão em Desenvolvimento Web",
    status: "em breve",
    badgeColor: "bg-yellow-100 text-yellow-600",
    iconColor: "fill-yellow-500",
    linkColor: "text-yellow-500",
    shadowColor: "#FF9F2E",
    deadline: "Previsão: Março/2024",
    linkText: "Mais Informações",
    link: "#"
  },
  {
    titulo: "Edital 010/2023",
    descricao: "Processo seletivo - Turma 2023.2 - Resultado Final Publicado",
    status: "encerrado",
    badgeColor: "bg-gray-100 text-gray-600",
    iconColor: "fill-gray-500",
    linkColor: "text-gray-500",
    shadowColor: "#728495",
    deadline: "Encerrado em: 20/12/2023",
    linkText: "Ver Resultado",
    link: "#"
  }
];

export default function ProcessosSeletivos() {
  return (
    <section className="bg-green-100 flex flex-col w-screen items-center justify-center py-10">
      <h4 className="text-green-800 text-sm font-semibold pb-2">EDITAIS E PROCESSOS</h4>
      <h1 className="font-bold text-4xl mb-10">Processos Seletivos Abertos</h1>

      <div className="w-screen flex flex-wrap justify-center gap-8">
        {processos.map((p, index) => (
          <CardTexto
            key={index}
            titulo={p.titulo}
            descricao={p.descricao}
            status={p.status}
            badgeColor={p.badgeColor}
            iconColor={p.iconColor}
            linkColor={p.linkColor}
            shadowColor={p.shadowColor}
            deadline={p.deadline}
            linkText={p.linkText}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}
