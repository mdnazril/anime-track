import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});


export const getTopAnime = async (page: number = 1) => {
    try {
        const response = await instance.get(`/top/anime?page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching top anime:", error);
        throw error;
    }
};

export const getAnimeById = async (id: string | number) => {
    try {
        const response = await instance.get(`/anime/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching anime with id ${id}:`, error);
        throw error;
    }
}

export const searchAnime = async (query: string) => {
    try {
        const response = await instance.get(`/anime?q=${query}`);
        return response.data;
    } catch (error) {
        console.error(`Error searching anime with query "${query}":`, error);

        throw error;
    }
}
