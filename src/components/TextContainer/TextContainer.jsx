import { StyledTextContainer } from "./text-container.styles";

export function TextContainer({ maxWidth, marginTop = 0, marginEnd = 0, marginBottom = 0, marginStart = 0, children }) {
    return (
        <StyledTextContainer maxWidth={maxWidth} marginTop={marginTop} marginEnd={marginEnd} marginBottom={marginBottom} marginStart={marginStart}>
            {children}
        </StyledTextContainer>
    )
}
