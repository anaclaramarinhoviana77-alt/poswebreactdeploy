import axios from "axios";

const api = axios.create({baseURL: "http://localhost:8000",});

export const getNoticias = async () => {
    const response = await api.get("/noticias");
    return response.data;
};