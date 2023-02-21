import { axiosAdminClient, axiosUserClient } from "../main";

const courseApi = {
    add: async (data) => {
        return await axiosAdminClient.post("/course/save", data);
    },
    put: async (data, id) => {
        return await axiosAdminClient.put(`/course/edit/${id}`);
    },
    getAll: async () => {
        return await axiosUserClient.get("/courses?page=0&size=100");
    }
}

export default courseApi;