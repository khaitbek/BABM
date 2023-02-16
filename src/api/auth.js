import { axiosUserClient } from "../main"

const authApi = {
    authenticate: async (data) => {
        const loginResponse = await axiosUserClient.post("/signin", data);
        return loginResponse;
    }
};

export default authApi;