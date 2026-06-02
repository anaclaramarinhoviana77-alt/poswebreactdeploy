export default function titulo({ children }) {
  return (
    <h1 className="text-2xl font-semibold text-gray-800">
      {children}
    </h1>
  );
}