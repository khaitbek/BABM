import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledGridSection = styled.section.attrs({
	className: 'mb-[64px]',
})`
	padding-top: ${(props) => props.paddingTop};
`;
export const StyledGridSectionTitle = styled(motion.h2).attrs({
	className: 'text-[#FF2059] font-medium text-center mb-4',
})``;
export const StyledGridSectionSubtitle = styled.p.attrs({
	className: 'font-medium text-[32px] text-center mb-14',
})``;
