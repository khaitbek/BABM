import React from 'react'
import { useTranslation } from "react-i18next"
import { StyledDiv } from "../../../../styles/global";
import StyledBreadcrumb, { StyledBreadCrumbCurrentPage, StyledBreadCrumbPreviousPage } from "./breadcrumb.styles"

export default function BreadCrumb({ links }) {
    const { t } = useTranslation();
    return (
        <StyledBreadcrumb>
            {links.map(link => (
                link.prev ? <StyledBreadCrumbPreviousPage>
                    <StyledDiv className="flex items-center gap-1">
                        {t(link.name)}<StyledDiv className="text-sm"> > </StyledDiv>
                    </StyledDiv>
                </StyledBreadCrumbPreviousPage>
                    : <StyledBreadCrumbCurrentPage>
                        {t(link.name)}
                    </StyledBreadCrumbCurrentPage>
            ))}
        </StyledBreadcrumb>
    )
}
