import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { courseApi, newsApi } from "../../../../api"
import Loader from "../../../../components/Loader";
import { NewsHeaders } from "../../../../data/table-data";
import AdminTable from "../../components/Sidebar/AdminTable/AdminTable";

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
    console.log(news);
    
    return (
        <div>
            {isLoading && <Loader />}
            {isError && <h1>Xatolik yuz berdi...</h1>}
            {/* {news ? <ul>
                {news.map(item => (
                    <li key={item.id}>
                        <h3>{item.titleUz}</h3>
                        <p>
                            {item.bodyUz}
                        </p>
                        <button onClick={() => handleItemClick(item)}>EDIT</button>
                    </li>
                ))}
            </ul> : null} */}
            <AdminTable tableFor="news" tableHeaders={NewsHeaders} />
        </div>
    )
}
