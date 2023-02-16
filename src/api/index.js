import authApi from "./auth";
import newsApi from "./news";
import courseApi from "./courseApi";
import partnerApi from "./partnerApi";
import fileApi from "./fileApi";
export const token = localStorage.getItem("babm_token");

export {
    authApi,
    newsApi,
    courseApi,
    partnerApi,
    fileApi
}