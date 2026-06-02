import Titulo from "./titulo";
import Subtitulo from "./subtitulo";

export default function TituloTopo({ titulo, subtitulo }) {
  return (
    <div>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
    </div>
  );
}