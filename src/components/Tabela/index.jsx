import { useState, useMemo } from "react";
import TabelaHeader from "./TabelaHeader";
import LinhaTabela from "./LinhaTabela";

export default function Tabela({
  dados = [],
  colunas = [],
  chaveSelecao = "id",
  onAcaoClick,
  customRenderers = {}
}) {
  const [selecionados, setSelecionados] = useState([]);

  const lista = useMemo(() => {
    return Array.isArray(dados) ? dados : [];
  }, [dados]);

  const toggleSelecionar = (chave) => {
    setSelecionados((prev) =>
      prev.includes(chave)
        ? prev.filter((id) => id !== chave)
        : [...prev, chave]
    );
  };

  const selecionarTodos = () => {
    if (selecionados.length === lista.length) {
      setSelecionados([]);
    } else {
      setSelecionados(lista.map((item) => item[chaveSelecao]));
    }
  };

  const todosSelecionados =
    lista.length > 0 && selecionados.length === lista.length;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <TabelaHeader
            colunas={colunas.map((c) => c.titulo)}
            todosSelecionados={todosSelecionados}
            onSelecionarTodos={selecionarTodos}
          />

          <tbody className="bg-white divide-y divide-gray-200">
            {lista.length === 0 ? (
              <tr>
                <td
                  colSpan={colunas.length + 1}
                  className="text-center py-6 text-gray-500"
                >
                  Nenhum registro encontrado.
                </td>
              </tr>
            ) : (
              lista.map((item) => (
                <LinhaTabela
                  key={item[chaveSelecao]}
                  item={item}
                  colunas={colunas}
                  selecionado={selecionados.includes(item[chaveSelecao])}
                  onSelecionar={() =>
                    toggleSelecionar(item[chaveSelecao])
                  }
                  onAcaoClick={onAcaoClick}
                  customRenderers={customRenderers}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
