export default function Texto_Escuro({ children, className = "" }) {
  return (
    <p className={`text-lg lg:text-xl leading-relaxed text-gray-700 ${className}`}>
      {children}
    </p>
  );
}