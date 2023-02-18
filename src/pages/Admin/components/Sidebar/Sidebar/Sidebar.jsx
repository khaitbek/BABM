import React from 'react'
import { StyledSidebar, StyledSidebarItem, StyledSidebarLink, StyledSidebarList } from "./sidebar.styles"

export default function Sidebar() {
    return (
        <StyledSidebar>
            <StyledSidebarList>
                {[{ title: "Kurslar", to: "courses", helper: "course" }, { title: "Yangiliklar", to: "news", helper: "news" }, { title: "Hamkorlar", to: "partners", helper: "partner" }, { title: "Fayllar", to: "files", helper: "file" }].map(item => (
                    <StyledSidebarItem key={item.title}>
                        <StyledSidebarLink to={item.to} state={{ addItemRoute: item.helper }}>
                            {item.title}
                        </StyledSidebarLink>
                    </StyledSidebarItem>
                ))}
            </StyledSidebarList>
        </StyledSidebar>
    )
}
