import { StyledContainer } from "../../styles/global";
import { TextContainer } from "../TextContainer/TextContainer";
import { StyledGridSection, StyledGridSectionSubtitle, StyledGridSectionTitle } from "./grid-section.styles";

export function GridSection({ title, subtitle, children, paddingTop = "64px" }) {
    return (
        <StyledGridSection paddingTop={paddingTop}>
            <StyledContainer>
                <TextContainer>
                    <StyledGridSectionTitle data-aos="fade-up">
                        {title}
                    </StyledGridSectionTitle>
                    <StyledGridSectionSubtitle data-aos="fade-up">
                        {subtitle}
                    </StyledGridSectionSubtitle>
                </TextContainer>
                {children}
            </StyledContainer>
        </StyledGridSection>
    )
}
