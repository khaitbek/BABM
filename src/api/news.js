import { axiosAdminClient, axiosUserClient } from "../main"

const newsApi = {
    add: async (data) => {
        return await axiosAdminClient.post("/news/save", data);
    },
    put: async (data, id) => {
        return await axiosAdminClient.put(`/news/edit/${id}`);
    },
    getAll: async () => {
        return await axiosUserClient.get("/news?page=0&size=100");
    },
    getOne: async (id) => {
        return await axiosUserClient.get(`/news/${id}`);
    }
};

export default newsApi;