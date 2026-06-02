export default function Filtro({ onClick }) {
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
        <polygon points="22 3 2 3 10 12 10 19 14 21 14 12 22 3" />
      </svg>
    </button>
  );
}