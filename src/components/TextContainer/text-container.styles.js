import styled from "styled-components";

export const StyledTextContainer = styled.div.attrs({
    className: "relative overflow-hidden"
})`
    max-width:${props => props.maxWidth};
    margin-top:${props => props.marginTop};
    margin-right:${props => props.marginEnd};
    margin-bottom:${props => props.marginBottom};
    margin-left:${props => props.marginStart};
    margin:${props => props.margin};
`