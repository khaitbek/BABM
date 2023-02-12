import { StyledContainer } from "../../styles/global";
import Navigation from "../Navigation/Navigation";
import { StyledHeader, StyledHeaderWrapper, StyledSiteLogo, StyledSiteLogoImg } from "./header.styles";
import SiteLogo from "/images/logo.svg";
export default function Header() {
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledHeaderWrapper>
                    <StyledSiteLogo href="#">
                        <StyledSiteLogoImg src={SiteLogo} width={187} height={50} alt="Barkamol Avlod Respublika bolalar markazi logosi" />
                    </StyledSiteLogo>
                    <Navigation />
                </StyledHeaderWrapper>
            </StyledContainer>
        </StyledHeader>
    )
}
