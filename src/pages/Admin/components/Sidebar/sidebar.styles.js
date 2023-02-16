import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledSidebar = styled(motion.aside).attrs({ className: "sidebar fixed bottom-0 top-0 w-[220px] bg-my-primary-100" })``;

export const StyledSidebarList = styled(motion.ul).attrs({ className: "sidebar-list" })``;

export const StyledSidebarItem = styled(motion.li).attrs({ className: "sidebar-item  bg-my-primary-100" })``;

export const StyledSidebarLink = styled(NavLink).attrs({ className: "sidebar-link block py-[15px] text-center text-white bg-my-primary-100" })`
    &:is(.active, :hover, :focus){
        background-color: #EABF9F;
    }
`;