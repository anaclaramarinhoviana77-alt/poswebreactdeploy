import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buscarAlunoPorMatricula, atualizarAluno } from "./alunos.service";

export default function AlunoEditPage() {
  const { matricula } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const data = await buscarAlunoPorMatricula(matricula);
        setForm(data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, [matricula]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await atualizarAluno(matricula, form);
      navigate("/modelo");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Erro ao atualizar aluno");
    }
  }

  if (loading) return <p className="p-6">Carregando...</p>;
  if (!form) return <p className="p-6">Aluno não encontrado.</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Editar Aluno</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded"
        >
          Atualizar
        </button>
      </form>
    </div>
  );
}