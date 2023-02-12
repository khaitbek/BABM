import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCardGrid = styled.ul.attrs({
    className: "grid relative justify-center"
})`
    grid-template-columns:${props => `repeat(${props.rows}, ${props.itemWidth})`};
    gap:${props => props.gap};
    padding-left:${props => props.paddingStart};
    padding-right:${props => props.paddingEnd};
`

export const StyledCardItem = styled.li.attrs({
    className: "relative mr-1"
})`
    grid-column:${props => `span ${props.colSpan}`};
`

export const StyledCardImage = styled.img.attrs({
    className: "max-w-full w-full"
})`
    border-radius:${props => props.rounded};
`