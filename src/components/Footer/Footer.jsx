import React from 'react'
import { StyledFooter, StyledFooterAddress, StyledFooterContactImg, StyledFooterContactItem, StyledFooterContactLink, StyledFooterContactList, StyledFooterField, StyledFooterForm, StyledFooterInner, StyledFooterInput, StyledFooterLabel, StyledFooterLink, StyledFooterLogo, StyledFooterMenu, StyledFooterMenuItem, StyledFooterMenuList, StyledFooterMenuTitle, StyledFooterMenuWrapper, StyledFooterOuter, StyledFooterSpan, StyledFooterTitle, StyledFooterWrapper } from "./footer.styles";
import { StyledContainer } from "../../styles/global";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import phoneLogo from "/images/footer/phone.svg";
import instagramLogo from "/images/footer/instagram.svg";
import mailLogo from "/images/footer/mail.svg";
import facebookLogo from "/images/footer/facebook.svg";
import telegramLogo from "/images/footer/telegram.svg";
import { TextContainer } from "../TextContainer/TextContainer";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const formSchema = zod.object({
    name: zod.string("Iltimos ismingizni kiriting!"),
    email: zod.string().email("Iltimos, to'g'ri emailni kiriting!")
});

export function Footer() {
    const { i18n, t } = useTranslation();
    const location = useLocation();
    const success = (msg) => toast.success(msg);
    const fail = (msg) => toast.error(msg);
    const { handleSubmit, register, formState: { errors, isValid }, reset } = useForm({
        defaultValues: {
            name: "",
            email: ""
        },
        resolver: zodResolver(formSchema)
    });
    const handleFormSubmit = async (data) => {
        if (!isValid) return fail("Iltimos, formani to'liq va to'g'ri to'ldiring!");
        return success("Muvaffaqqiyatli yuborildi!") && reset();
    }
    return (
        <StyledFooter style={{
            display: ["/login", "/admin","/news/add"].includes(location.pathname) ? "none" : "block"
        }}>
            <StyledContainer>
                <StyledFooterWrapper>
                    <StyledFooterInner>
                        <StyledFooterLink href="/">
                            <StyledFooterLogo src="/images/logo-dark.svg" width={187} height={50} alt="Barkamol Avlod tashkiloti logosi" />
                        </StyledFooterLink>

                        <StyledFooterTitle>
                            <StyledFooterSpan>{t("hero.hero_subtitle")}</StyledFooterSpan> <br />
                            {t("hero.hero_title")}
                        </StyledFooterTitle>
                        <TextContainer maxWidth={"190px"}>
                            <StyledFooterAddress>
                                {t("footer.address")}
                            </StyledFooterAddress>
                        </TextContainer>
                        <StyledFooterContactList>
                            <StyledFooterContactItem>
                                <StyledFooterContactImg width={24} height={24} src={phoneLogo} alt="Phone logo" aria-hidden="true" />
                                <StyledFooterContactLink href="tel:712020909">
                                    (71) 202 09 09
                                </StyledFooterContactLink>
                            </StyledFooterContactItem>
                            <StyledFooterContactItem>
                                <StyledFooterContactImg width={24} height={24} src={mailLogo} alt="Phone logo" aria-hidden="true" />
                                <StyledFooterContactLink target="blank" href="mailto:info@tbabm.uz">
                                    info@tbabm.uz
                                </StyledFooterContactLink>
                            </StyledFooterContactItem>
                            <StyledFooterContactItem>
                                <StyledFooterContactImg width={24} height={24} src={facebookLogo} alt="Phone logo" aria-hidden="true" />
                                <StyledFooterContactLink target="blank" href="http://m.facebook.com/respublikabarkamolavlod/">
                                    @tosh_babm
                                </StyledFooterContactLink>
                            </StyledFooterContactItem>
                            <StyledFooterContactItem>
                                <StyledFooterContactImg width={24} height={24} src={instagramLogo} alt="Phone logo" aria-hidden="true" />
                                <StyledFooterContactLink target="blank" href="http://instagram.com/respublikabarkamolavlodmaktabi">
                                    @toshbabm
                                </StyledFooterContactLink>
                            </StyledFooterContactItem>
                            <StyledFooterContactItem>
                                <StyledFooterContactImg width={24} height={24} src={telegramLogo} alt="Phone logo" aria-hidden="true" />
                                <StyledFooterContactLink target="blank" href="https://t.me/Barkamolbolalarmaktabi">
                                    @toshkent_babm
                                </StyledFooterContactLink>
                            </StyledFooterContactItem>
                        </StyledFooterContactList>
                    </StyledFooterInner>
                    <StyledFooterOuter>
                        <StyledFooterForm onSubmit={handleSubmit(handleFormSubmit)}>
                            <StyledFooterField>
                                <StyledFooterInput placeholder={t("footer.form.name")} id="name" {...register("name")} type="text" required />
                                <StyledFooterLabel htmlFor="email">
                                    {t("footer.form.name")}
                                </StyledFooterLabel>
                            </StyledFooterField>
                            <StyledFooterField>
                                <StyledFooterInput placeholder={t("footer.form.email")} {...register("email")} type="email" id="email" required />
                                <StyledFooterLabel htmlFor="email">
                                    {t("footer.form.email")}
                                </StyledFooterLabel>
                            </StyledFooterField>
                            <Button type="submit" variant="danger" padding="17px 26px" borderRadius="24px">
                                {t("footer.form.subscribe")} 
                            </Button>
                        </StyledFooterForm>
                        <StyledFooterMenuWrapper>
                            <StyledFooterMenu>
                                <StyledFooterMenuTitle>
                                    {t("navigation.school")}
                                </StyledFooterMenuTitle>
                                <StyledFooterMenuList>
                                    <StyledFooterMenuItem>
                                        {t("navigation.about_school")}
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        {t("navigation.staff")}

                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        {t("navigation.staff")}

                                    </StyledFooterMenuItem>
                                </StyledFooterMenuList>

                                <StyledFooterMenu>
                                    <StyledFooterMenuTitle>
                                        {t("navigation.documents")}
                                    </StyledFooterMenuTitle>
                                    <StyledFooterMenuList>
                                        <StyledFooterMenuItem>
                                            331-{t("law")}
                                        </StyledFooterMenuItem>
                                        <StyledFooterMenuItem>
                                            4467-{t("law")}
                                        </StyledFooterMenuItem>
                                    </StyledFooterMenuList>
                                </StyledFooterMenu>
                            </StyledFooterMenu>
                            <StyledFooterMenu>
                                <StyledFooterMenuTitle>
                                    {t("navigation.spheres")}
                                </StyledFooterMenuTitle>
                                <StyledFooterMenuList>
                                    {[0,0,0,0,0,0,0].map((item,index) => (
                                        <StyledFooterMenuItem>
                                            {t(`footer.categories.${index}`)}
                                        </StyledFooterMenuItem>
                                    ))}
                                </StyledFooterMenuList>
                            </StyledFooterMenu>
                            <StyledFooterMenu>
                                <StyledFooterMenuTitle>
                                    {t("navigation.career")}
                                </StyledFooterMenuTitle>
                                <StyledFooterMenuList>
                                    <StyledFooterMenuItem>
                                        {t("footer.career.heads")}
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        {t("footer.career.other_staff")}

                                    </StyledFooterMenuItem>
                                </StyledFooterMenuList>

                                <StyledFooterMenu className="">
                                    <StyledFooterMenuTitle>
                                        {t("navigation.info")}

                                    </StyledFooterMenuTitle>
                                    <StyledFooterMenuList>
                                        <StyledFooterMenuItem>
                                            {t("footer.info.gallery")}

                                        </StyledFooterMenuItem>
                                        <StyledFooterMenuItem>
                                            {t("footer.info.video_gallery")}

                                        </StyledFooterMenuItem>
                                    </StyledFooterMenuList>
                                </StyledFooterMenu>
                            </StyledFooterMenu>
                        </StyledFooterMenuWrapper>
                    </StyledFooterOuter>
                </StyledFooterWrapper>
            </StyledContainer>
            <ToastContainer />
        </StyledFooter>
    )
}
