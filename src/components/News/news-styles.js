import styled from "styled-components";

export const StyledPostTitle = styled.h3.attrs({
    className: "font-medium"
})``

export const StyledPostTimeWrapper = styled.div.attrs({
    className: "mt-4 mb-[14px] pl-[20px] bg-time bg-left bg-no-repeat"
})`
    background-size:15px;
`

export const StyledPostTime = styled.time.attrs({
    className: "font-medium text-[12px] text-[#3E3E3E]"
})``;

export const StyledPostImage = styled.img.attrs({ className: "w-[500px] h-[380px] mb-4" })``;
export const StyledPostText = styled.p.attrs({ className: "font-semibold text-base leading-[18px]" })``;