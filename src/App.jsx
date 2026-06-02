import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import ProcessosSeletivos from "./components/ProcessosSeletivos"
import Noticias from "./components/Noticias"
import Numeros from "./components/Numeros"
import Footer from "./components/Footer"
import TituloTabela from "./components/TituloTabela"
import Alunos from "./pages/alunos/Aluno"
import ModeloPage from "./pages/modelo/AlunoPage";
import ModeloCreatePage from "./pages/modelo/AlunoCreatePage"
import ModeloShowPage from "./pages/modelo/AlunoShowPage"
import ModeloEditPage from "./pages/modelo/AlunoEditPage"
import Ouvidoria from "./pages/ouvidoria/OuvidoriaPage";
import NoticiaPage from "./pages/noticias/NoticiaPage"
import DocentePage from "./pages/docente/DocentePage";
import InscricaoPage from "./pages/inscricoes/InscricoesPage";


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProcessosSeletivos />
      <Noticias />
      <Numeros />
      <TituloTabela />
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelo" element={<ModeloPage />} />
        <Route path="/modelo/novo" element={<ModeloCreatePage />} />
        <Route path="/modelo/:matricula" element={<ModeloShowPage />} />
        <Route path="/modelo/:matricula/editar" element={<ModeloEditPage />} />
        <Route path="/aluno" element={<Alunos />} />
        <Route path="/ouvidoria" element={<Ouvidoria/>} />
        <Route path="/noticias" element={<NoticiaPage />} />
        <Route path="/docentes" element={<DocentePage />} />
        <Route path="/inscricoes" element={<InscricaoPage />} />
        <Route path="/inscricoes/:id" element={<InscricaoPage />} />

      </Routes>

      <Footer />
    </>
  );
}
