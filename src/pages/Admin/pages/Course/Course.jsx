import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { courseApi } from "../../../../api"
import Loader from "../../../../components/Loader";
import { CourseHeaders } from "../../../../data/table-data";
import AdminTable from "../../components/Sidebar/AdminTable/AdminTable";

export default function AdminCourse() {
    const { data: courses, isLoading, isError } = useQuery({
        queryKey: ["adminCourses"],
        queryFn: async () => {
            return await (await courseApi.getAll()).data.content;
        }
    });
    const navigate = useNavigate();
    function handleCourseClick(course) {
        if (!course || !course?.id) return;
        navigate(`/edit/course/${course.id}`, {
            state: course
        });
    }
    return (
        <div>
            {isLoading && <Loader />}
            {isError && <h1>Xatolik yuz berdi...</h1>}
            <AdminTable tableFor="courses" tableHeaders={CourseHeaders} />

        </div>
    )
}
