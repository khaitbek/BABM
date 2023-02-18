import React from 'react';
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
export default function Navigation() {
	const navigate = useNavigate();
	return (
		<StyledNav>
			<StyledNavList id='primaryNavigation' title='Asosiy menu'>
				{navLinks.map((navLink) => (
					<StyledNavItem key={crypto.randomUUID()}>
						<StyledNavSelect>
							{navLink.title}
							<StyledNavSelectWrapper>
								{navLink.dropdown.map((item) => (
									<StyledNavOption onClick={() => {
										navigate(`${item.label}`)
									}} key={crypto.randomUUID()} value={item.value}>
										{item.value}
									</StyledNavOption>
								))}

							</StyledNavSelectWrapper>
						</StyledNavSelect>
					</StyledNavItem>
				))}
			</StyledNavList>
		</StyledNav>
	);
}
