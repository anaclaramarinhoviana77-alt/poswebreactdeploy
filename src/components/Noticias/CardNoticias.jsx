import ImagemNoticias from "./ImagemNoticias";
import MetaNoticias from "./MetaNoticias";
import TituloNoticias from "./TituloNoticias";
import TextoNoticias from "./TextoNoticias";

export default function CardNoticias({ noticia }) {
  return (
    <article className="flex flex-col">
      <ImagemNoticias src={noticia.imagem} alt={noticia.alt} />

      <MetaNoticias
        data={noticia.data}
        categoria={noticia.categoria}
      />

      <TituloNoticias>
        {noticia.titulo}
      </TituloNoticias>

      <TextoNoticias>
        {noticia.descricao}
      </TextoNoticias>
    </article>
  );
}