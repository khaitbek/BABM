import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams, useRoutes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { courseApi, newsApi } from "../../../../api";
import { CourseSchema } from "../../../../schemas";
import { StyledFlexWrapper, StyledFullPageWrapper } from "../../../../styles/global";
import StyledForm, { StyledFormButton, StyledFormCloseButton, StyledFormGroup, StyledFormInput, StyledFormLabel, StyledFormTitle, StyledFormWrapper } from "../AdminForm/admin-form.styles";

export default function NewCourse() {
    const { state } = useLocation();
    const { id } = useParams();
    console.log(state);
    const navigate = useNavigate();
    const { mutateAsync } = useMutation({
        mutationFn: async (data) => {
            if (!state) return await courseApi.add(data);
            return await courseApi.put({
                ...data,
                imageId: Number(data.imageId),
                // time: Number(data.time),
                id: Number(data.id),
                number: Number(data.number)
            }, id);
        }
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(CourseSchema),
        defaultValues: state || {}
    });
    const newCourseHandler = async (data) => {
        console.log(data);
        try {
            const mutationResponse = await mutateAsync(data);

            console.log(mutationResponse.data);
            toast.success("Muvaffaqqiyatli amalga oshirildi!");
            reset();
        } catch (err) {
            toast.error("Xatolik yuz berdi!");
        }
    }
    return (
        <StyledForm onSubmit={handleSubmit(newCourseHandler)}>

            <StyledFormWrapper>

                <StyledFormTitle>
                    {state ? "Kursni yangilash" : "Kurs qo'shish"}
                </StyledFormTitle>

                <StyledFlexWrapper className="mb-4">
                    <StyledFormGroup>
                        <StyledFormLabel>
                            O'zbekcha sarlavha
                            <StyledFormInput {...register("titleUz")} type="text" />
                        </StyledFormLabel>
                        <StyledFormLabel>
                            Ruscha sarlavha
                            <StyledFormInput {...register("titleRu")} type="text" />
                        </StyledFormLabel>
                        <StyledFormLabel>
                            Ruscha matn
                            <StyledFormInput {...register("bodyRu")} type="text" />
                        </StyledFormLabel>
                        <StyledFormLabel>
                            O'zbekcha matn
                            <StyledFormInput {...register("bodyUz")} type="text" />
                        </StyledFormLabel>
                        <StyledFormLabel>
                            ID <br />
                            <StyledFormInput {...register("id")} type="number" />
                        </StyledFormLabel>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <StyledFormLabel>
                            Rasm ID
                            <StyledFormInput {...register("imageId")} type="number" />
                        </StyledFormLabel>
                        <StyledFormLabel>
                            Vaqt
                            <StyledFormInput {...register("number")} type="number" />
                        </StyledFormLabel>
                    </StyledFormGroup>

                </StyledFlexWrapper>
                <StyledFormButton type="submit">
                    Tasdiqlash
                </StyledFormButton>

                <ToastContainer />
            </StyledFormWrapper>
        </StyledForm>
    )
}
