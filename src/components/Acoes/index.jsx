import edicao from "../../assets/icons/edicao.png";
import excluir from "../../assets/icons/excluir.png";
import mostrar from "../../assets/icons/mostrar.png";

export default function Acoes({ item, onAcaoClick }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <img
        src={mostrar}
        alt="Mostrar"
        title="Mostrar"
        className="w-4 h-4 cursor-pointer transition-transform duration-150 hover:scale-110 hover:opacity-80"
        onClick={() => onAcaoClick?.("visualizar", item)}
      />

      <img
        src={edicao}
        alt="Editar"
        title="Editar"
        className="w-4 h-4 cursor-pointer transition-transform duration-150 hover:scale-110 hover:opacity-80"
        onClick={() => onAcaoClick?.("editar", item)}
      />

      <img
        src={excluir}
        alt="Excluir"
        title="Excluir"
        className="w-4 h-4 cursor-pointer transition-transform duration-150 hover:scale-110 hover:opacity-80"
        onClick={() => onAcaoClick?.("excluir", item)}
      />
    </div>
  );
}
