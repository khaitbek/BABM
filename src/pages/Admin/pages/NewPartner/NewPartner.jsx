import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { partnerApi } from "../../../../api";
import { PartnerSchema } from "../../../../schemas";
import { StyledFlexWrapper, StyledFullPageWrapper } from "../../../../styles/global";
import StyledForm, { StyledFormButton, StyledFormCloseButton, StyledFormGroup, StyledFormInput, StyledFormLabel, StyledFormTitle, StyledFormWrapper } from "../AdminForm/admin-form.styles";

export default function NewPartner() {
    const navigate = useNavigate();
    const { mutateAsync } = useMutation({
        mutationFn: async (data) => {
            return await partnerApi.add(data);
        }
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(PartnerSchema)
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
                    Hamkor qo'shish
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
                            Raqam
                            <StyledFormInput {...register("number")} type="number" />
                        </StyledFormLabel>
                        <StyledFormLabel>
                            Link
                            <StyledFormInput {...register("url")} type="url" />
                        </StyledFormLabel>
                        
                    </StyledFormGroup>

                </StyledFlexWrapper>
                <StyledFormButton type="submit">
                    Qo'shish
                </StyledFormButton>

                <ToastContainer />
            </StyledFormWrapper>
        </StyledForm>
    )
}
