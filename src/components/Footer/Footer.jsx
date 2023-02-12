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
const formSchema = zod.object({
    name: zod.string("Iltimos ismingizni kiriting!"),
    email: zod.string().email("Iltimos, to'g'ri emailni kiriting!")
});

export function Footer() {
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
        <StyledFooter>
            <StyledContainer>
                <StyledFooterWrapper>
                    <StyledFooterInner>
                        <StyledFooterLink href="/">
                            <StyledFooterLogo src="/images/logo-dark.svg" width={187} height={50} alt="Barkamol Avlod tashkiloti logosi" />
                        </StyledFooterLink>

                        <StyledFooterTitle>
                            <StyledFooterSpan>Toshkent shahar</StyledFooterSpan> <br />
                            Barkamol Avlod Bolalar Maktabi
                        </StyledFooterTitle>
                        <TextContainer maxWidth={"190px"}>
                            <StyledFooterAddress>
                                10011, O’zbekiston, Toshkent,
                                Shayxontoxur tumani,
                                Navoiy ko’chasi, 2A uy
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
                                <StyledFooterInput placeholder="ismingiz..." id="name" {...register("name")} type="text" required />
                                <StyledFooterLabel htmlFor="email">
                                    Ism Familiya
                                </StyledFooterLabel>
                            </StyledFooterField>
                            <StyledFooterField>
                                <StyledFooterInput placeholder="elektron pochta..." {...register("email")} type="email" id="email" required />
                                <StyledFooterLabel htmlFor="email">
                                    Elektron po’chta manzil
                                </StyledFooterLabel>
                            </StyledFooterField>
                            <Button type="submit" variant="danger" padding="17px 26px" borderRadius="24px">
                                Obuna bo'lish
                            </Button>
                        </StyledFooterForm>
                        <StyledFooterMenuWrapper>
                            <StyledFooterMenu>
                                <StyledFooterMenuTitle>
                                    Maktab
                                </StyledFooterMenuTitle>
                                <StyledFooterMenuList>
                                    <StyledFooterMenuItem>
                                        Maktab haqida
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Rahbariyat
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Maktab tuzilmasi
                                    </StyledFooterMenuItem>
                                </StyledFooterMenuList>

                                <StyledFooterMenu>
                                    <StyledFooterMenuTitle>
                                        Hujjatlar
                                    </StyledFooterMenuTitle>
                                    <StyledFooterMenuList>
                                        <StyledFooterMenuItem>
                                            331-qaror
                                        </StyledFooterMenuItem>
                                        <StyledFooterMenuItem>
                                            4467-qaror
                                        </StyledFooterMenuItem>
                                    </StyledFooterMenuList>
                                </StyledFooterMenu>
                            </StyledFooterMenu>
                            <StyledFooterMenu>
                                <StyledFooterMenuTitle>
                                    Ta’lim yonalishlari
                                </StyledFooterMenuTitle>
                                <StyledFooterMenuList>
                                    <StyledFooterMenuItem>
                                        Madaniyat va san’at
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Texnika konstruktorlik va modellashtirish
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Jismoniy tarbiya va sport
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Hunarmandchilik va qo‘l mehnati
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Ekologiya va turizm
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Oliy ta’lim muassasalari va maktabga tayyorlov
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Xorijiy tillar
                                    </StyledFooterMenuItem>
                                </StyledFooterMenuList>
                            </StyledFooterMenu>
                            <StyledFooterMenu>
                                <StyledFooterMenuTitle>
                                    Faoliyat
                                </StyledFooterMenuTitle>
                                <StyledFooterMenuList>
                                    <StyledFooterMenuItem>
                                        To’garak rahbarlari
                                    </StyledFooterMenuItem>
                                    <StyledFooterMenuItem>
                                        Boshqa hodimlar
                                    </StyledFooterMenuItem>
                                </StyledFooterMenuList>

                                <StyledFooterMenu className="">
                                    <StyledFooterMenuTitle>
                                        Axborot xizmati
                                    </StyledFooterMenuTitle>
                                    <StyledFooterMenuList>
                                        <StyledFooterMenuItem>
                                            Galereya
                                        </StyledFooterMenuItem>
                                        <StyledFooterMenuItem>
                                            Videogalereya
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
