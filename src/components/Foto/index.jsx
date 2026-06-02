export default function Foto({ src, alt = "", size = 36 }) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-full object-cover border border-gray-200"
      style={{ width: size, height: size }}
    />
  );
}
