import React from 'react'
import BackButton from "../../../../components/BackButton";
import { TextContainer } from "../../../../components/TextContainer/TextContainer";
import { StyledContainer, StyledDiv } from "../../../../styles/global"
import { StyledSingleStuff, StyledSingleStuffContact, StyledSingleStuffImg, StyledSingleStuffSocialImg, StyledSingleStuffSocialItem, StyledSingleStuffSocialLink, StyledSingleStuffSocials, StyledSingleStuffText, StyledSingleStuffTitle, StyledStuffContact, StyledStuffImg, StyledStuffItem, StyledStuffList, StyledStuffText, StyledStuffTitle } from "./staff.styles"
import facebookImg from "/facebook.svg";
import instagramImg from "/instagram.svg";
import telegramImg from "/telegram.svg";
export default function Staff() {
    return (
        <StyledContainer>
            <StyledSingleStuff>
                <StyledSingleStuffImg src="https://via.placeholder.com/300x400" width={300} height={400} alt="Mirsagatova Tamara Maxamatovna" />
                <StyledDiv>
                    <TextContainer maxWidth="320px">
                        <StyledSingleStuffTitle>
                            Mirsagatova
                            Tamara
                            Maxamatovna
                        </StyledSingleStuffTitle>
                        <StyledSingleStuffText>
                            Toshkent shahar BABM direktori
                        </StyledSingleStuffText>
                        <StyledSingleStuffContact>
                            Telefon raqami: +998 71 237 34 22
                            E-mail: info@barkamolavlod.uz
                        </StyledSingleStuffContact>
                    </TextContainer>
                    <StyledSingleStuffSocials>
                        <StyledSingleStuffSocialItem>
                            <StyledSingleStuffSocialLink href="https://facebook.com">
                                <StyledSingleStuffSocialImg src={facebookImg} />
                            </StyledSingleStuffSocialLink>
                        </StyledSingleStuffSocialItem>
                        <StyledSingleStuffSocialItem>
                            <StyledSingleStuffSocialLink href="https://instagram.com">
                                <StyledSingleStuffSocialImg src={instagramImg} />
                            </StyledSingleStuffSocialLink>
                        </StyledSingleStuffSocialItem>
                        <StyledSingleStuffSocialItem>
                            <StyledSingleStuffSocialLink href="https://telegram.org">
                                <StyledSingleStuffSocialImg src={telegramImg} />
                            </StyledSingleStuffSocialLink>
                        </StyledSingleStuffSocialItem>
                    </StyledSingleStuffSocials>
                </StyledDiv>
            </StyledSingleStuff>

            <StyledStuffList>
                <StyledStuffItem>
                    <StyledStuffImg src="https://via.placeholder.com/250x333" width={250} height={333} />
                    <StyledStuffTitle>
                        Mirsagatova Tamara Maxamatovna
                    </StyledStuffTitle>
                    <StyledStuffText>
                        Toshkent shahar BABM direktori
                    </StyledStuffText>
                    <StyledStuffContact>
                        Telefon raqami: +998 71 237 34 22
                        E-mail: info@barkamolavlod.uz
                    </StyledStuffContact>
                </StyledStuffItem>
                <StyledStuffItem>
                    <StyledStuffImg src="https://via.placeholder.com/250x333" width={250} height={333} />
                    <StyledStuffTitle>
                        Mirsagatova Tamara Maxamatovna
                    </StyledStuffTitle>
                    <StyledStuffText>
                        Toshkent shahar BABM direktori
                    </StyledStuffText>
                    <StyledStuffContact>
                        Telefon raqami: +998 71 237 34 22
                        E-mail: info@barkamolavlod.uz
                    </StyledStuffContact>
                </StyledStuffItem>
                <StyledStuffItem>
                    <StyledStuffImg src="https://via.placeholder.com/250x333" width={250} height={333} />
                    <StyledStuffTitle>
                        Mirsagatova Tamara Maxamatovna
                    </StyledStuffTitle>
                    <StyledStuffText>
                        Toshkent shahar BABM direktori
                    </StyledStuffText>
                    <StyledStuffContact>
                        Telefon raqami: +998 71 237 34 22
                        E-mail: info@barkamolavlod.uz
                    </StyledStuffContact>
                </StyledStuffItem>
                <StyledStuffItem>
                    <StyledStuffImg src="https://via.placeholder.com/250x333" width={250} height={333} />
                    <StyledStuffTitle>
                        Mirsagatova Tamara Maxamatovna
                    </StyledStuffTitle>
                    <StyledStuffText>
                        Toshkent shahar BABM direktori
                    </StyledStuffText>
                    <StyledStuffContact>
                        Telefon raqami: +998 71 237 34 22
                        E-mail: info@barkamolavlod.uz
                    </StyledStuffContact>
                </StyledStuffItem>
            </StyledStuffList>
            <BackButton />
        </StyledContainer>
    )
}
