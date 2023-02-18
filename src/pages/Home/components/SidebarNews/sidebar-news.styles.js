import styled from "styled-components";

const StyledSidebar = styled.aside.attrs({ className: "w-[400px] mb-[60px] ml-auto pl-[60px]" })`
    border-left: 1px solid #888;
`;
export const StyledSidebarTopText = styled.p.attrs({ className: "mb-[34px] text-sm leading-[14px] text-[#3D3D3D]" })``;

export const StyledSidebarNewsList = styled.ul.attrs({ className: "grid gap-[34px]" })``;
export const StyledSidebarNewsItem = styled.li.attrs({ className: "grid gap-4 cursor-pointer" })``;
export const StyledSidebarNewsTitle = styled.h3.attrs({ className: "font-medium text-base leading-4" })``;
export default StyledSidebar;