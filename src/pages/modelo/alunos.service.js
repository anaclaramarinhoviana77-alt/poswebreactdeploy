import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const buscarAlunos = async () => {
  const response = await api.get("/alunos");
  return response.data;
};

export const buscarAlunoPorMatricula = async (matricula) => {
  const response = await api.get(`/alunos/${matricula}`);
  return response.data;
};

export const criarAluno = async (dados) => {
  const response = await api.post("/alunos", dados);
  return response.data;
};

export const atualizarAluno = async (matricula, dados) => {
  const response = await api.put(`/alunos/${matricula}`, dados);
  return response.data;
};

export const excluirAluno = async (matricula) => {
  await api.delete(`/alunos/${matricula}`);
  return true;
};