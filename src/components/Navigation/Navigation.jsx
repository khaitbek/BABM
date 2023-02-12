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
export default function Navigation() {
	return (
		<StyledNav>
			<StyledNavList id='primaryNavigation' title='Asosiy menu'>
				{navLinks.map((navLink) => (
					<StyledNavItem key={crypto.randomUUID()}>
						<StyledNavSelect>
							{navLink.title}
							<StyledNavSelectWrapper>
								{navLink.dropdown.map((item) => (
									<StyledNavOption key={crypto.randomUUID()} value={item.value}>
										{item.label}
									</StyledNavOption>
								))}

							</StyledNavSelectWrapper>
						</StyledNavSelect>
						{/* <Select options={navLink.dropdown} /> */}
					</StyledNavItem>
				))}
			</StyledNavList>
		</StyledNav>
	);
}
