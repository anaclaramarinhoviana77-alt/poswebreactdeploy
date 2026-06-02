export default function InputPesquisa({
  value,
  onChange,
  placeholder = "Pesquisar..."
}) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-56
          pl-9 pr-3 py-2
          text-sm
          bg-white
          border border-gray-200
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-gray-300
        "
      />

      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );
}