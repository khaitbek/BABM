import styled from "styled-components";

export const StyledCourseBody = styled.div.attrs({ className: "absolute h-[106px] bottom-[15px] left-[15px] right-[15px] py-[17px] px-4 rounded-[16px] bg-white", })`
    background-image:${props => `/images/courses/course-icon-${props.id}.svg`};
    box-shadow: 0px 4px 20px rgba(112, 144, 176, 0.25);
    backdrop-filter: blur(5px);
`;

export const StyledCourseTitle = styled.div.attrs({ className: "text-[#012245] font-medium text-[20px] mb-2", })``;

export const StyledCourseText = styled.div.attrs({ className: "text-[#3E3E3E] font-medium text-[12px]", })`
`