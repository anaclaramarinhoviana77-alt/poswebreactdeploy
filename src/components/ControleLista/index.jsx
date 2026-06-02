import InputPesquisa from "./inputPesquisa";
import Filtro from "./filtro";
import Exportar from "./exportar";

export default function ControleLista({
  pesquisa,
  onPesquisa,
  onFiltro,
  onExportar,
  placeholderPesquisa
}) {
  return (
    <div className="flex items-center gap-2">
      <InputPesquisa
        value={pesquisa}
        onChange={onPesquisa}
        placeholder={placeholderPesquisa}
      />
      <Filtro onClick={onFiltro} />
      <Exportar onClick={onExportar} />
    </div>
  );
}