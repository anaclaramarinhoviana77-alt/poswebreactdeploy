import Subtitulo_branco from '../Subtitulo_branco';
import Titulo_branco from '../Titulo_branco';
import fundoTopo from '../../assets/imagens/fundotopo.png';

export default function Hero() {
  return (
    <section 
      className="text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${fundoTopo})` }}
    >
      <div className="pl-40 py-20 flex flex-col gap-8 items-start max-w-7xl">

        {/* Badge */}
        <a
          href="#"
          className="inline-flex bg-white/20 text-white rounded-full px-4 py-1"
        >
          Especialização Lato Sensu
        </a>

        {/* Título */}
        <Titulo_branco>
          Pós-Graduação em Desenvolvimento Web
        </Titulo_branco>

        {/* Subtítulo */}
        <Subtitulo_branco>
          Forme-se como especialista em tecnologias web modernas. Aprenda com os melhores professores do IFBA e desenvolva projetos práticos que farão diferença no mercado.
        </Subtitulo_branco>

        {/* Botões */}
        <div className="flex gap-8">
          <button className="bg-white text-green-700 py-3 px-7 rounded-lg font-bold hover:bg-gray-300 transition">
            Inscreva-se Agora
          </button>
          <button className="text-white border-2 py-3 px-7 rounded-lg font-bold hover:bg-white/20 transition">
            Saiba Mais
          </button>
        </div>

        {/* Números */}
        <section className="flex gap-8 text-white">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold">18</h1>
            <p>Meses de Duração</p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold">360h</h1>
            <p>Carga Horária</p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold">100%</h1>
            <p>Empregabilidade</p>
          </div>
        </section>

      </div>
    </section>
  );
}
