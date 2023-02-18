import { axiosAdminClient, axiosUserClient } from "../main";

const partnerApi = {
    add: async (data) => {
        return await axiosAdminClient.post("/partner/save", data);
    },
    getAll: async () => {
        return await axiosUserClient.get("/partners");
    },
    put: async (id) => {
        return await axiosAdminClient.put(`/partner/edit/${id}`);
    }
}

export default partnerApi