import { motion } from "framer-motion";
import styled from "styled-components";

const StyledLogin = styled(motion.section).attrs({ className: "min-h-screen flex items-center justify-center min-h-full" })`
    
`;

export const StyledLoginWrapper = styled.div.attrs({ className: "max-w-[320px] mx-auto" })`

`;

export const StyledLoginTitle = styled.h2.attrs({ className: "mb-6 text-2xl leading-7 text-center text-[#111111]" })``;

export const StyledLoginForm = styled.form.attrs({ className: "grid gap-6 p-6" })``;

// export const StyledLoginField = styled.form.attrs({ className: "" })``;

export const StyledLoginInput = styled.input.attrs({ className: "p-2 border rounded border-solid border-[#EEEEEE] placeholder:text-sm placeholder:leading-4 placeholder:text-[#111111]" })`
background: rgba(249, 249, 249, 0.8);
`;

export const StyledLoginButton = styled.button.attrs({ className: "py-2 bg-[#007AFF] text-white rounded-md" })``;

export default StyledLogin;