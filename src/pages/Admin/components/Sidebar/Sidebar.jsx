import React from 'react'
import { StyledSidebar, StyledSidebarItem, StyledSidebarLink, StyledSidebarList } from "./sidebar.styles"

export default function Sidebar() {
    return (
        <StyledSidebar>
            <StyledSidebarList>
                {[{ title: "Kurslar", to: "courses" }, { title: "Yangiliklar", to: "news" }, { title: "Hamkorlar", to: "partners" }].map(item => (
                    <StyledSidebarItem key={item.title}>
                        <StyledSidebarLink to={item.to}>
                            {item.title}
                        </StyledSidebarLink>
                    </StyledSidebarItem>
                ))}
            </StyledSidebarList>
        </StyledSidebar>
    )
}
