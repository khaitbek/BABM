import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { NewsHeaders } from "../../../../data/table-data";
import Loader from "../../../../components/Loader";
import AdminTable from "../../components/Sidebar/AdminTable/AdminTable";
import { courseApi, newsApi } from "../../../../api";

export default function AdminNews() {
    const { data: news, isLoading, isError } = useQuery({
        queryKey: ["adminNews"],
        queryFn: async () => {
            return await (await newsApi.getAll()).data.content;
        }
    });
    const navigate = useNavigate();
    function handleItemClick(item) {
        if (!item || !item?.id) return;
        navigate(`/edit/news/${item.id}`, {
            state: item
        });
    };
    return (
        <div>
            {isLoading && <Loader />}
            {isError && <h1>Xatolik yuz berdi...</h1>}
            <AdminTable tableFor="news" tableHeaders={NewsHeaders} />
        </div>
    )
}
