import styled from 'styled-components';

export const StyledNav = styled.nav``;

export const StyledNavList = styled.ul.attrs({
	className: 'flex items-center gap-[30px]',
})``;

export const StyledNavItem = styled.li``;
export const StyledNavLink = styled.a.attrs({
	className: 'font-medium text-sm leading-[48px] font-montserrat ',
})``;

export const StyledNavSelect = styled.div.attrs({
	className:
		'pr-6 text-[12px] leading-6 bg-dropdown bg-no-repeat cursor-pointer max-w-[120px]',
})`
	background-position: right;

	&:hover .select-list {
		display:grid;
	}
`;
export const StyledNavSelectWrapper = styled.div.attrs({
	className: 'grid gap-4 px-4 py-4 hidden absolute b-0 rounded bg-white select-list',
})`
	z-index:10;
	box-shadow:0 10px 15px rgba(0,0,0,0.5);
`;

export const StyledNavOption = styled.div``;
