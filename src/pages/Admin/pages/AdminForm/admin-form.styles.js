import { motion } from "framer-motion";
import styled from "styled-components";

// const StyledForm = styled(motion.section).attrs({ className: "min-h-screen flex items-center justify-center min-h-full" })`

// `;


export const StyledFormWrapper = styled.div.attrs({ className: "max-w-[320px] md:max-w-[450px] lg:max-w-[650px] grid mx-auto" })`
    
`;

export const StyledFormCloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    /* width: 3%; */
    padding: 2.5rem;
    background-color: #007AFF;
    &::before, &::after{
        content: "";
        position: absolute;
        top: 0;
        bottom: 10%;
        padding: 2px;
        border-radius: 10px;
        background-color: #fff;
    }

    &::before{
        left: 50%;
        transform: rotate(45deg);
    }

    &::after{
        transform: rotate(-45deg);

    }
`;

export const StyledFormTitle = styled.h2.attrs({ className: "mb-6 text-2xl leading-7 text-center text-[#111111]" })``;
export const StyledFormGroup = styled.div``;
export const StyledForm = styled.form.attrs({ className: "" })``;

export const StyledFormLabel = styled.label.attrs({ className: "block mb-6 text-sm leading-4 text-[#111111]" })``;
export const StyledFormInput = styled.input.attrs({ className: "w-full mt-2 p-2 border rounded border-solid border-[#EEEEEE] placeholder:text-sm placeholder:leading-4 placeholder:text-[#111111]" })`
background: rgba(249, 249, 249, 0.8);
`;

export const StyledFormButton = styled.button.attrs({ className: "py-2 bg-[#007AFF] text-white rounded-md" })``;

export default StyledForm;