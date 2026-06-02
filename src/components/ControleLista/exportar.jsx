export default function Exportar({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-9 h-9
        flex items-center justify-center
        bg-white
        border border-gray-200
        rounded-lg
        hover:bg-gray-50
      "
    >
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    </button>
  );
}