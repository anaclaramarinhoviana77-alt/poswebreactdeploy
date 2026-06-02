import Checkbox from "./Checkbox";
import Status from "../Status";
import Acoes from "../Acoes";
import Foto from "../Foto";
import foto from "../../assets/imagens/06.png";

export default function LinhaTabela({ 
  item, 
  colunas, 
  selecionado, 
  onSelecionar,
  onAcaoClick,
  customRenderers = {}
}) {
  
  const renderizarCelula = (coluna) => {
    
    if (customRenderers[coluna.campo]) {
      return customRenderers[coluna.campo](item);
    }

    
    switch (coluna.tipo) {
      case 'foto':
        return (
          <div className="flex items-center">
            <Foto src={item.foto || foto} alt={`Foto de ${item.nome}`} />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">{item.nome}</div>
            </div>
          </div>
        );
      
      case 'status':
        return <Status status={item[coluna.campo]} />;
      
      case 'acoes':
        return <Acoes 
  item={item}
  onAcaoClick={onAcaoClick}
/>;
      
      case 'texto':
      default:
        return <span className="text-sm text-gray-500">{item[coluna.campo]}</span>;
    }
  };

  return (
    <tr className={selecionado ? 'bg-blue-50' : ''}>
      <td className="px-6 py-4 whitespace-nowrap">
        <Checkbox checked={selecionado} onChange={onSelecionar} />
      </td>
      
      {colunas.map((coluna, index) => (
        <td key={index} className="px-6 py-4 whitespace-nowrap">
          {renderizarCelula(coluna)}
        </td>
      ))}
    </tr>
  );
}