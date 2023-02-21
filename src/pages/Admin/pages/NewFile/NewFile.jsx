import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { fileApi } from "../../../../api";
import { StyledFlexWrapper, StyledFullPageWrapper } from "../../../../styles/global";
import StyledForm, { StyledFormButton, StyledFormCloseButton, StyledFormGroup, StyledFormInput, StyledFormLabel, StyledFormTitle, StyledFormWrapper } from "../AdminForm/admin-form.styles";
import StyledUploadedImg from "./newfile.styles";

export default function NewFile() {

    const [preview, setPreview] = useState();
    const [image, setImage] = useState();
    function handleOnDrop(files) {
        setAuthorImage(files[0]);
    }
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        mode: "all"
    });

    const navigate = useNavigate();
    const { mutateAsync } = useMutation({
        mutationFn: async (data) => {
            return await fileApi.add(data);
        }
    });

    const newFileHandler = async (data) => {
        try {
            const mutationResponse = await mutateAsync(data);
            toast.success("Muvaffaqqiyatli amalga oshirildi!");
            reset();
            setImage(undefined);
            setPreview(undefined);
        } catch (err) {
            toast.error("Xatolik yuz berdi!");
        }
    };

    useEffect(() => {
        if (!image) {
            setPreview(undefined);
            return
        }

        const imageUrl = URL.createObjectURL(image);
        setPreview(imageUrl);

        return () => URL.revokeObjectURL(imageUrl);
    }, [image]);

    return (
        <StyledForm onSubmit={handleSubmit(newFileHandler)}>

            <StyledFormWrapper>

                <StyledFormTitle>
                    Fayl qo'shish
                </StyledFormTitle>

                <StyledFormGroup>
                    {preview ? <StyledUploadedImg src={preview} width={200} height={300} alt="Yuklangan fayl" /> : null}
                    <StyledFormLabel draggable={true} onDragStart={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                        onDragLeave={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                        onDragOver={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                        onDrop={(e) => {
                            e.stopPropagation();
                            e.preventDefault();

                            setImage(e.dataTransfer.files[0]);
                        }}>
                        Fayl
                        <StyledFormInput {...register("file")} onChangeCapture={(evt) => {
                            setImage(evt.target.files[0])
                        }} type="file"
                        />
                    </StyledFormLabel>
                </StyledFormGroup>

                <StyledFormButton type="submit">
                    Qo'shish
                </StyledFormButton>

                <ToastContainer />
            </StyledFormWrapper>
        </StyledForm>
    )
}
