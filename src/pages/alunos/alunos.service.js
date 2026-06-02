import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const buscarAlunos = async () => {
  const response = await api.get("/alunos");
  return response.data;
};
