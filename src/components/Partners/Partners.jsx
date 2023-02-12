import { GridSection } from "../GridSection";
import { CardGrid, CardGridImage, CardGridItem } from "../CardGrid/CardGrid";
import partners from "../../data/partners";
import { StyledPartner, StyledPartnerTitle } from "./partners.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
export function Partners() {
    const settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        gap:4
    };
    return (
        <GridSection title="-Hamkorlar-" subtitle="Bizning hamkorlar">
            {/* <CardGrid rows={5} itemWidth="212px" gap="48px"> */}
            <Slider {...settings}>
                {partners.map(partner => (
                    <CardGridItem key={crypto.randomUUID()} colSpan={1}>
                        <StyledPartner>
                            <CardGridImage src={partner.logo} width={100} height={51} description={partner.title} />
                            <StyledPartnerTitle>
                                {partner.title}
                            </StyledPartnerTitle>
                        </StyledPartner>
                    </CardGridItem>
                ))}
            </Slider>
            {/* </CardGrid> */}
        </GridSection>
    )
}
