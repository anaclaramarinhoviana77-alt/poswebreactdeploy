export default function ImagemNoticias({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-56 object-cover rounded-xl shadow-sm"
    />
  );
}