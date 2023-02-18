import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
import SidebarNews from "../pages/Home/components/SidebarNews"
import { StyledApp, StyledFlexWrapper, StyledMain } from "../styles/global"

export default function RootLayout() {
    return <StyledApp
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85 }}>
        <Header />
        <StyledMain className="pt-[142px]">
            <Outlet />
        </StyledMain>
        <Footer />
    </StyledApp>
}