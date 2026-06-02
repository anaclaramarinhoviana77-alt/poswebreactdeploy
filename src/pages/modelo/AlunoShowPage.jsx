import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscarAlunoPorMatricula } from "./alunos.service";

export default function AlunoShowPage() {
  const { matricula } = useParams();
  const [aluno, setAluno] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const data = await buscarAlunoPorMatricula(matricula);
        setAluno(data);
      } catch (error) {
        console.error(error.response?.data || error.message);
        setAluno(null);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, [matricula]);

  if (loading) return <p className="p-6">Carregando...</p>;
  if (!aluno) return <p className="p-6">Aluno não encontrado.</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Detalhes do Aluno</h1>

      <div className="space-y-2">
        <p><strong>Matrícula:</strong> {aluno.matricula}</p>
        <p><strong>Nome:</strong> {aluno.nome}</p>
        <p><strong>Email:</strong> {aluno.email}</p>
      </div>
    </div>
  );
}