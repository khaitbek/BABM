import styled from "styled-components";
const StyledBreadcrumb = styled.div.attrs({ className: "flex gap-2 items-center mb-4 mt-12" })``;
export const StyledBreadCrumbPreviousPage = styled.button.attrs({ className: "text-sm leading-[14px] text-[#3D3D3D]" })``;
export const StyledBreadCrumbCurrentPage = styled.button.attrs({ className: "text-sm leading-[14px] text-[#000000]" })``;
export default StyledBreadcrumb;