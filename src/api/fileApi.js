import { axiosAdminClient } from "../main";

const fileApi = {
    add: async (data) => {
        const dataToFormData = objectToFormData(data);
        return await axiosAdminClient.post("/file/save", dataToFormData);
    }
}

function objectToFormData(object) {
    if (object === null || object === undefined) return;
    const newFormData = new FormData();
    Object.entries(object).forEach(entry => {
        if (entry[0] === "file") {
            newFormData.append(entry[0], entry[1][0]);
        }
        else {
            newFormData.append(entry[0], entry[1]);
        }
    });
    return newFormData;

}

export default fileApi