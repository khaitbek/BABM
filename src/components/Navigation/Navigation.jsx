import React, { useEffect, useState } from 'react';
import {
	StyledNav,
	StyledNavItem,
	StyledNavLink,
	StyledNavList,
	StyledNavOption,
	StyledNavSelect,
	StyledNavSelectWrapper,
} from './navigation.styles';
import navLinks from '../../data/nav-links';
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
export default function Navigation() {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	return (
		<StyledNav>
			<StyledNavList id='primaryNavigation'>
				{navLinks.map((navLink) => (
					<StyledNavItem key={crypto.randomUUID()}>
						<StyledNavSelect>
							{t(`navigation.${navLink.title}`)}
							<StyledNavSelectWrapper>
								{navLink.dropdown.map((item) => (
									<StyledNavOption onClick={() => {
										navigate(`${item.label}`)
									}} key={crypto.randomUUID()} value={item.value}>
										{t(`navigation.${item.value}`)}
									</StyledNavOption>
								))}


							</StyledNavSelectWrapper>
						</StyledNavSelect>
					</StyledNavItem>
				))}
				<StyledNavItem>
					{/* <StyledNavSelect>
						{t("lang")}
						<StyledNavSelectWrapper>
							<StyledNavOption onClick={() => {
								localStorage.setItem("lang", "uz");
								changeLanguage("uz");
							}}>
								O'zbekcha
							</StyledNavOption>
							<StyledNavOption onClick={() => {
								localStorage.setItem("lang", "ru");
								changeLanguage("ru");
							}}>
								Ruscha
							</StyledNavOption>
						</StyledNavSelectWrapper>
					</StyledNavSelect> */}
					<ul class="lang-list">
						<li onClick={() => {
							localStorage.setItem("lang", "uz");
							changeLanguage("uz");
						}} class="lang-item">
							<div class={i18n.language === "uz" ? "lang-link active-lang" : "lang-link"} href="#"> УЗ </div>
						</li>
						<li onClick={() => {
							localStorage.setItem("lang", "ru");
							changeLanguage("ru");
						}} class={i18n.language === "ru" ? "lang-link active-lang" : "lang-link"}>
							<div class="lang-link" href="#"> РУ </div>
						</li>
					</ul>
				</StyledNavItem>
			</StyledNavList>
		</StyledNav>
	);
}
