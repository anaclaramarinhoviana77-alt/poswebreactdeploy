export default function MetaNoticias({ data, categoria }) {
  return (
    <div className="flex items-center gap-4 text-gray-500 text-sm mt-4">
      <span className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
          />
        </svg>
        {data}
      </span>

      <span className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
        {categoria}
      </span>
    </div>
  );
}