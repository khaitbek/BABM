import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form"
import { redirect, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { authApi } from "../../api";
import { LoginSchema } from "../../schemas";
import { StyledContainer } from "../../styles/global"
import StyledLogin, { StyledLoginButton, StyledLoginForm, StyledLoginInput, StyledLoginTitle, StyledLoginWrapper } from "./login.styles"

export default function Login() {
    const navigate = useNavigate();
    const { mutateAsync, data, isLoading } = useMutation({
        mutationFn: async (data) => {
            return await authApi.authenticate(data)
        },

    });
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(LoginSchema)
    });

    const handleLogin = async (data) => {
        try {
            const loginMutationData = await mutateAsync(data);
            localStorage.setItem("babm_token", `${loginMutationData.data.type} ${loginMutationData.data.token}`);
            navigate("/admin/courses");
            console.log("Redirecting ...");
        } catch (error) {
            console.log(error);
            toast.error("Parol yoki login noto'g'ri!");
        }
    }
    return (
        <StyledLogin>
            <StyledContainer>
                <StyledLoginWrapper>
                    <StyledLoginTitle>
                        Tizimga kirish
                    </StyledLoginTitle>
                    <StyledLoginForm onSubmit={handleSubmit(handleLogin)}>
                        <StyledLoginInput aria-label="Username" autoComplete="username" {...register("username")} type="text" required />
                        <StyledLoginInput aria-label="Password" autoComplete="password" {...register("password")} type="password" required />
                        <StyledLoginButton type="submit">
                            Tizimga kirish
                        </StyledLoginButton>
                    </StyledLoginForm>
                </StyledLoginWrapper>
                <ToastContainer />
            </StyledContainer>
        </StyledLogin>
    )
}
