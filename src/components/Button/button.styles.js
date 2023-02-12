import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledButton = styled(motion.button).attrs({ className: "bg-transparent border border-transparent cursor-pointer bg-[#FF2059] text-white font-montserrat hover:opacity-2" })`
    padding:${props => props.padding};
    border-radius:${props => props.borderRadius};
`;
