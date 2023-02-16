import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { newsApi } from "../../../../api";
import { NewsSchema } from "../../../../schemas";
import { StyledFlexWrapper, StyledFullPageWrapper } from "../../../../styles/global";
import StyledForm, { StyledFormButton, StyledFormCloseButton, StyledFormGroup, StyledFormInput, StyledFormLabel, StyledFormTitle, StyledFormWrapper } from "../AdminForm/admin-form.styles";

export default function AddNews() {
    const { state } = useLocation();
    const { id } = useParams();

    const navigate = useNavigate();
    const { mutateAsync } = useMutation({
        mutationFn: async (data) => {
            if (!state) return await newsApi.add(data);
            return await newsApi.put({
                ...data,
                imageId:Number(data.imageId),
                time:Number(data.time),
                id:Number(data.id),
            }, id);
        }
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(NewsSchema),
        defaultValues: state || {}
    });
    const addNewsHandler = async (data) => {
        console.log(data);
        try {
            const mutationResponse = await mutateAsync(data);
            toast.success("Muvaffaqqiyatli amalga oshirildi!");
            reset();
        } catch (err) {
            toast.error("Xatolik yuz berdi!");
        }
    }
    console.log(errors);

    return (
        <>
            <StyledForm onSubmit={handleSubmit(addNewsHandler)}>

                <StyledFormWrapper>

                    <StyledFormTitle>
                        {state ? "Yangilikni o'zgartirish" : "Yangilik qo'shish"}
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
                                Ruscha manba
                                <StyledFormInput {...register("sourceRu")} type="text" />
                            </StyledFormLabel>
                            <StyledFormLabel>
                                O'zbekcha manba
                                <StyledFormInput {...register("sourceUz")} type="text" />
                            </StyledFormLabel>
                            <StyledFormLabel>
                                Vaqt
                                <StyledFormInput {...register("time")} type="number" />
                            </StyledFormLabel>
                        </StyledFormGroup>

                    </StyledFlexWrapper>
                    <StyledFormButton type="submit">
                        Tasdiqlash
                    </StyledFormButton>

                    <ToastContainer />
                </StyledFormWrapper>
            </StyledForm>
        </>
    )
}
