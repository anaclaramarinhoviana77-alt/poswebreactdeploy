import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarAluno } from "./alunos.service";

export default function AlunoCreatePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    matricula: "",
    nome: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await criarAluno(form);
      navigate("/modelo");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Erro ao criar aluno");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Novo Aluno</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          name="matricula"
          placeholder="Matrícula"
          value={form.matricula}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </div>
  );
}