import styled from "styled-components";

export const StyledNav = styled.nav``;

export const StyledNavList = styled.ul.attrs({
    className: "flex items-center gap-[30px]"
})``;

export const StyledNavItem = styled.li``;
export const StyledNavLink = styled.a.attrs({
    className: "font-medium text-sm leading-[48px] font-montserrat"
})``;

export const StyledNavSelect = styled.div.attrs({
    className: "pr-6 text-[17px] leading-6 bg-dropdown bg-no-repeat cursor-pointer"
})`
background-position:right;

&:hover .select-list{
    display:block;
}
`
export const StyledNavSelectWrapper = styled.div.attrs({
    className: "grid gap-8 hidden absolute p-2 rounded bg-white select-list"
})`
`

export const StyledNavOption = styled.div``;