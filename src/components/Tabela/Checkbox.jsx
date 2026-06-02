// components/Tabela/Checkbox.jsx
export default function Checkbox({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      checked={checked}
      onChange={onChange}
    />
  );
}