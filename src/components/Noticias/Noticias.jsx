import img03 from "../../assets/imagens/03.png";
import img04 from "../../assets/imagens/04.png";
import img05 from "../../assets/imagens/05.png";
import CardNoticias from "./CardNoticias";

const noticias = [
  {
    imagem: img03,
    alt: "Cerimônia de Colação de Grau",
    data: "10 Jan 2024",
    categoria: "Eventos",
    titulo: "Cerimônia de Colação de Grau da Turma 2023",
    descricao:
      "A cerimônia de formatura da turma 2023 aconteceu no auditório principal do IFBA com a presença de familiares e autoridades.",
  },
  {
    imagem: img04,
    alt: "Workshop React e Next.js",
    data: "05 Jan 2024",
    categoria: "Palestras",
    titulo: "Workshop sobre React e Next.js",
    descricao:
      "Palestrante internacional ministra workshop sobre as mais recentes tecnologias em desenvolvimento front-end.",
  },
  {
    imagem: img05,
    alt: "Projeto de Pesquisa FAPESB",
    data: "28 Dez 2023",
    categoria: "Pesquisa",
    titulo: "Projeto de Pesquisa Aprovado pela FAPESB",
    descricao:
      "Grupo de pesquisa do programa recebe financiamento para desenvolvimento de aplicações web acessíveis.",
  },
];

export default function Noticias() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mb-10">
        <div>
          <span className="text-green-700 font-semibold text-sm tracking-wide">
            NOTÍCIAS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">
            Últimas Atualizações
          </h2>
        </div>

        <a
          href="#"
          className="flex items-center gap-2 text-green-700 font-semibold hover:underline"
        >
          Ver Todas
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3">
        {noticias.map((noticia, index) => (
          <CardNoticias key={index} noticia={noticia} />
        ))}
      </div>
    </section>
  );
}