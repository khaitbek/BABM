import styled from "styled-components";

export const StyledFooter = styled.footer.attrs({ className: "pt-14 pb-[60px]  bg-footer bg-no-repeat bg-cover" })``;
export const StyledFooterLink = styled.a``;
export const StyledFooterLogo = styled.img.attrs({ className: "w-[187px] h-[50px] mb-[32px]" })``;
export const StyledFooterTitle = styled.strong.attrs({
    className: "mb-[15px] font-bold text-[1.5rem] text-white"
})``;

export const StyledFooterSpan = styled.span.attrs({
    className: "text-[24px] font-semibold"
})``

export const StyledFooterAddress = styled.address.attrs({
    className: "mb-[32px] text-[14px] leading-[24px] text-primary-100"
})`
    font-style:inherit;
`;
export const StyledFooterContactList = styled.ul.attrs({ className: "grid  gap-[16px]" })``;
export const StyledFooterContactItem = styled.li.attrs({ className: "flex  gap-[9px]" })``;
export const StyledFooterContactImg = styled.img.attrs({ className: "w-[24px] h-[24px]" })``;
export const StyledFooterContactLink = styled.a.attrs({ className: "text-[14px] text-white" })``;
export const StyledFooterWrapper = styled.div.attrs({ className: "flex items-start gap-[81px]" })``;
export const StyledFooterInner = styled.div.attrs({ className: "pr-[72px] border-r border-1 border-white" })``;
export const StyledFooterOuter = styled.div.attrs({ className: "grid gap-14" })``;
export const StyledFooterForm = styled.form.attrs({ className: "flex items-start gap-4 p-4  bg-white rounded-[16px]" })`

    & button{
        width:max-content;
        font-size:14px;
        font-weight:600;
    }

`;
export const StyledFooterField = styled.div.attrs({ className: "relative" })``;
export const StyledFooterLabel = styled.label.attrs({ className: "absolute top-[-14px] left-[24px] p-1 bg-white text-[#012245]" })``;
export const StyledFooterInput = styled.input.attrs({ className: "max-w-[280px] px-6 py-4 rounded-[8px] border border-[#012245] placeholder:text-[12px] placeholder:text-[rgba(0,0,0,0.5)]" })``;
export const StyledFooterMenuWrapper = styled.div.attrs({ className: "flex gap-4" })``;
export const StyledFooterMenu = styled.div.attrs({ className: "" })``;
export const StyledFooterMenuTitle = styled.strong.attrs({ className: "inline-block mb-[16px] font-semibold text-[18px] text-white" })`
`;
export const StyledFooterMenuList = styled.ul.attrs({ className: "grid gap-2 mb-6" })``;
export const StyledFooterMenuItem = styled.li.attrs({ className: "text-[12px] leading-[24px] text-white" })``;