
import Checkbox from "./Checkbox";

export default function TabelaHeader({ colunas, todosSelecionados, onSelecionarTodos }) {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
          <Checkbox
            checked={todosSelecionados}
            onChange={onSelecionarTodos}
          />
        </th>
        {colunas.map((coluna, index) => (
          <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {coluna}
          </th>
        ))}
      </tr>
    </thead>
  );
}