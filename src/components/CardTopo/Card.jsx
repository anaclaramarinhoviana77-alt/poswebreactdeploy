export default function Card({
  titulo,
  valor,
  corTexto = "text-gray-800",
  corBg = "bg-gray-200",
  icone
}) {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl p-5 shadow-sm border border-gray-100 w-full">
      <div>
        <p className="text-sm text-gray-500">{titulo}</p>
        <p className={`text-2xl font-bold ${corTexto}`}>{valor}</p>
      </div>

      <div className={`flex items-center justify-center w-11 h-11 rounded-lg ${corBg}`}>
        <span className={`text-xl ${corTexto}`}>{icone}</span>
      </div>
    </div>
  );
}
