import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHero = styled.section.attrs({
	className: 'relative pt-[88px]',
})`
	/* isolation:isolate;
    &::before{
        content:"";
        position:absolute;
        inset:0;
        z-index:-1;
        background:rgba(0,0,0,0.5);
    } */
`;

export const StyledHeroWrapper = styled.div.attrs({
	className: 'max-w-[605px] ml-[191px]',
})``;

export const StyledHeroTitle = styled(motion.h1).attrs({
	className: 'mb-[2rem] font-bold text-[3rem] leading-[55px] text-primary-100',
})``;

export const StyledHeroSpan = styled.span.attrs({
	className: 'text-[36px] leading-[41px] font-semibold',
})``;

export const StyledHeroText = styled(motion.p).attrs({
	className: 'mb-[55px] text-[17px] leading-[24px] text-primary-100',
})``;

export const StyledHeroSocialList = styled(motion.ul).attrs({
	className:
		'overflow-hidden grid gap-[10px] p-[10px] rounded-[100vmax] absolute bg-white',
})`
	left: calc(50% - 690px);
`;

export const StyledHeroSocialItem = styled.li``;
export const StyledHeroSocialLink = styled.a``;
export const StyledHeroSocialImage = styled.img.attrs({
	className: 'w-[40px] h-[40px]',
})``;
