import React from "react";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="hidden md:flex items-center  justify-between px-10 py-5 bg-white shadow text-sm font-medium">
      
      {/* Logo + título */}
      <div className="flex items-center space-x-4">
        <Logo variant="dark" size={80} />

        {/* Texto Pós-Graduação */}
        <div>
          <h1 className="text-lg font-semibold">Pós-Graduação</h1>
          <p className="text-sm">Desenvolvimento Web</p>
        </div>
      </div>

      {/* Menu de links */}
      <div className="flex flex-row gap-5 items-center">
        <a href="inicio" className="hover:text-gray-200">
          Início
        </a>

        <div className="relative group">
          <button className="flex items-center space-x-1 hover:text-gray-200">
            <span>Sobre o Curso</span>
            <span>▾</span>
          </button>
          {/* Aqui poderia vir dropdown, se precisar */}
        </div>

        <a href="processo seletivo" className="hover:text-gray-200">
          Processo Seletivo
        </a>
        <a href="contato" className="hover:text-gray-200">
          Contato
        </a>

        {/* Botão Portal do Aluno */}
        <a
          href="portal do aluno"
          className="bg-green-600 px-5 py-2 rounded font-semibold hover:bg-green-500 text-white"
        >
          Portal do Aluno
        </a>
      </div>
    </nav>
  );
}
