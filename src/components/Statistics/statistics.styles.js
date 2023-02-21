import styled from 'styled-components';

export const StyledStats = styled.section.attrs({
	className:
		'absolute py-[30px] pr-[74px] pl-[31px] bg-[#012245] rounded-[30px]',
})`
	width: 1150px;
	left: 0;
	right: 0;
	margin: 0 auto;
	bottom: -8%;
`;
export const StyledStatList = styled.ul.attrs({
	className: 'grid grid-cols-[repeat(4,255px)] gap-[17px] items-center',
})``;
export const StyledStatItem = styled.li.attrs({
	className: 'relative flex items-center gap-4 before:block before:w-[90px]',
})`
	&::before {
		content: '';
		aspect-ratio: 1;
		background-image: ${(props) => {
			return `url(${props.image})`;
	}};
		border-radius:20px;
		background-size: 90px;
		background-repeat: no-repeat;
		background-position: center;
	}
`;
export const StyledStatTitle = styled.h3.attrs({
	className: 'mb-[9px] font-bold text-[32px] leading-6 text-white',
})``;
export const StyledStatText = styled.p.attrs({
	className: 'text-[12px] font-medium leading-[12px] text-white',
})``;
