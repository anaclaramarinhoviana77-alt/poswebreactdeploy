import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const buscarInscricoes = async () => {
    const response = await api.get("/inscricoes");
    return response.data;
  };
  
export const buscarInscricaoPorId = async(id) => {
    const response = await api.get(`/inscricoes/${id}`);
    return response.data;
};