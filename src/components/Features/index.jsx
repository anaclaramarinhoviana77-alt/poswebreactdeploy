import graduacaoIcon from "../../assets/icons/graduacao.png";
import noteIcon from "../../assets/icons/note.png";
import certificacaoIcon from "../../assets/icons/certificacao.png";
import networkingIcon from "../../assets/icons/networking.png";
import turmaImage from "../../assets/imagens/02.png";
import Titulo_Escuro from "../TituloEscuro";
import Texto_Escuro from "../TextoEscuro";

const features = [
  {
    titulo: "Corpo Docente Qualificado",
    descricao: "Mestres e doutores com experiência no mercado",
    icon: graduacaoIcon,
  },
  {
    titulo: "Projetos Reais",
    descricao: "Desenvolvimento de aplicações práticas",
    icon: noteIcon,
  },
  {
    titulo: "Certificação MEC",
    descricao: "Reconhecido pelo Ministério da Educação",
    icon: certificacaoIcon,
  },
  {
    titulo: "Networking",
    descricao: "Conexão com profissionais da área",
    icon: networkingIcon,
  },
];

export default function Features() {
  return (
    <section className="pt-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-12 pt-10 mb-20 lg:pl-36">
      
      {/* Texto e Features */}
      <div>
        <Titulo_Escuro>
          Especialização em Desenvolvimento Web de Alta Qualidade
        </Titulo_Escuro>

        <Texto_Escuro className="mt-8">
          O curso de Pós-graduação em Desenvolvimento Web do IFBA é reconhecido nacionalmente
          pela excelência na formação de profissionais capacitados para atuar no mercado de tecnologia.
        </Texto_Escuro>

        <Texto_Escuro className="mt-6">
          Com uma abordagem prática e atual, nossos alunos desenvolvem competências em frameworks modernos,
          arquitetura de software, UX/UI design e metodologias ágeis.
        </Texto_Escuro>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4 items-start mt-2">
              <img src={item.icon} alt={item.titulo} className="w-10 h-10" />
              <div>
                <h4 className="font-bold text-gray-900 text-base lg:text-lg">{item.titulo}</h4>
                <p className="text-gray-600 text-lg font-normal pr-4">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Imagem lateral com destaque */}
      <div className="relative">
        <img
          src={turmaImage}
          alt="turma"
          className="rounded-xl w-full max-w-[645px] h-[590px] object-cover shadow-2xl"
        />

        <div className="absolute -bottom-8 -left-7 bg-green-700 text-white px-8 py-8 rounded-xl shadow-2xl">
          <p className="font-inter text-[42px] font-bold leading-none">500+</p>
          <p className="text-lg font-normal mt-3 leading-tight">Alunos Formados</p>
        </div>
      </div>
      
    </section>
  );
}
