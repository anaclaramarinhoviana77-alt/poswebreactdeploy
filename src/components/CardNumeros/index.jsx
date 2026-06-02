import React from "react";

export default function CardNumeros(props) {
  return (
          <section className="bg-gray-300/10 rounded-xl shadow-2xl p-8 flex flex-col items-center">
            <svg
              className="w-12 h-12 mb-3"
              viewBox="0 -64 640 640"
              fill="currentColor"
            >{props.imagem}
            </svg>

            <h3 className="text-4xl font-bold mb-1">{props.titulo}</h3>
            <p className="text-white/80">{props.texto}</p>
          </section>

            );
}