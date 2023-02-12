import { StyledCardGrid, StyledCardImage, StyledCardItem } from "./card-grid.styles";

export function CardGrid({ paddingStart = 0, paddingEnd = 0, rows = 4, gap = "1rem", itemWidth = "300px", children }) {
    return (
        <StyledCardGrid paddingStart={paddingStart} paddingEnd={paddingEnd} rows={rows} gap={gap} itemWidth={itemWidth}>
            {children}
        </StyledCardGrid>
    )
}
export function CardGridItem({ colSpan = 1, children }) {
    return (
        <StyledCardItem data-aos="fade-up" colSpan={colSpan} transition={{ duration: 1 }}>
            {children}
        </StyledCardItem>
    )
}

export function CardGridImage({ src = "https://via.placeholder.com/300", width = 300, height = 300, description = "Bizning kurslarimiz haqida ma'lumot!", rounded = "25px" }) {
    return (
        <StyledCardImage rounded={rounded} src={src} width={width} height={height} alt={description} />
    )
}