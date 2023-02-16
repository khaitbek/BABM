import { axiosAdminClient } from "../main";

const partnerApi = {
    add: async (data) => {
        return await axiosAdminClient.post("/partner/save", data);
    }
}

export default partnerApi