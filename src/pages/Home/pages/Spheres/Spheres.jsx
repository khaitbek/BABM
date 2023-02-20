import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, } from "react-accessible-accordion"
import { useTranslation } from "react-i18next"
import { Footer } from "../../../../components/Footer"
import Header from "../../../../components/Header"
import { StyledApp, StyledContainer, StyledDiv, StyledFlexWrapper } from "../../../../styles/global"
import { EyeIcon } from "../../../../utils"
import BreadCrumb from "../../components/BreadCrumb"
import SidebarNews from "../../components/SidebarNews"
import { StyledSphereImage, StyledSphereItem, StyledSphereList } from "./spheres.styles"
import SphereImg from "/spheres.png";
const items = [
    {
        title: "Ma'daniyat va san'at",
        innerList: [
            "Ona tili va adabiyoti",
            "Biologiya",
            "Kimyo",
        ]
    },
    {
        title: "Texnika konstruktorlik va modellashtirish",
        innerList: [
            "Ona tili va adabiyoti",
            "Biologiya",
            "Kimyo",
        ]
    },
    {
        title: "Jismoniy tarbiya va sport",
        innerList: [
            "Ona tili va adabiyoti",
            "Biologiya",
            "Kimyo",
        ]
    },
    {
        title: "Hunarmandchilik va qo’l mehnati",
        innerList: [
            "Ona tili va adabiyoti",
            "Biologiya",
            "Kimyo",
        ]
    },
    {
        title: "Ekologiya va turizm",
        innerList: [
            "Ona tili va adabiyoti",
            "Biologiya",
            "Kimyo",
        ]
    },
    {
        title: "Oliy ta’lim muassasalari va maktabga tayyorlov",
        innerList: [
            "Biologiya",
            "Kimyo",
            "Fizika",
            "Matematika",
            "Tarix",
            "Mental Arifmetika",
        ]
    },
    {
        title: "Xorijiy tillar",
        innerList: [
            "Ingliz tili",
            "Rus tili",
            "Arab tili",
        ]
    },
]

export default function Spheres() {
    const { t } = useTranslation();
    return (
        <>
            <StyledSphereImage src={SphereImg} width={1440} height={437} aria-hidden="true" alt="Barkamol Avlod" />

            <StyledContainer>
                <BreadCrumb links={[{ prev: true, name:"navigation.spheres"}]} />
                <StyledDiv className="mb-[96px]">
                    <StyledFlexWrapper>
                        <Accordion allowZeroExpanded>
                            {items.map((item, index) => (
                                <AccordionItem className="accordion-item" key={crypto.randomUUID()}>
                                    <AccordionItemHeading className="block my-6 py-6 border-b text-xl">
                                        <AccordionItemButton>
                                            {t(`footer.categories.${index}`)}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <StyledSphereList>
                                            {item.innerList.map((innerItem,index) => (
                                                <StyledSphereItem key={crypto.randomUUID()}>
                                                    {t(`footer.categories.${index}`)}
                                                </StyledSphereItem>
                                            ))}
                                        </StyledSphereList>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <SidebarNews />
                    </StyledFlexWrapper>
                </StyledDiv>
            </StyledContainer>
        </>
    )
}
