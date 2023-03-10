import React from 'react';
import {
	StyledHero,
	StyledHeroSocialImage,
	StyledHeroSocialItem,
	StyledHeroSocialLink,
	StyledHeroSocialList,
	StyledHeroSpan,
	StyledHeroText,
	StyledHeroTitle,
	StyledHeroWrapper,
} from './hero.styles';
import { StyledContainer } from '../../styles/global';
import { StyledButton } from '../../components/Button/button.styles';
import { Button } from '../../components/Button/Button';
import { TextContainer } from '../TextContainer/TextContainer';
import { socialIcons } from '../../data/hero-social';
import { useTranslation } from "react-i18next";

export function Hero() {
	const { t } = useTranslation();
	return (
		<StyledHero>
			<StyledHeroSocialList
				initial={{ opacity: 0, height: 60 }}
				animate={{ opacity: 1, height: 160 }}
				transition={{ duration: 1, delay: 1 }}>
				{socialIcons.map((item) => (
					<StyledHeroSocialItem key={crypto.randomUUID()}>
						<StyledHeroSocialLink href={item.link} target='blank'>
							<StyledHeroSocialImage
								src={item.icon}
								alt={`Barkamol Avlod tashkilotining ${item.platform} sahifasi`}
								width={40}
								height={40}
							/>
						</StyledHeroSocialLink>
					</StyledHeroSocialItem>
				))}
			</StyledHeroSocialList>
			<StyledContainer>
				<TextContainer maxWidth={'538px'}>
					<StyledHeroTitle
						initial={{ y: '-100%', opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}>
						<StyledHeroSpan>{t("hero.hero_subtitle")}</StyledHeroSpan>
						<br />
						{t("hero.hero_title")}
					</StyledHeroTitle>
					<StyledHeroText
						initial={{ opacity: 0, x: '100%' }}
						animate={{ opacity: 1, x: '0%' }}
						transition={{ delay: 1, duration: 1 }}>
						{t("hero.hero_text")}
					</StyledHeroText>
					<Button variant='danger' padding='12px 23px' borderRadius='100vmax'>
						{t("read_more")}
					</Button>
				</TextContainer>
			</StyledContainer>
		</StyledHero>
	);
}
