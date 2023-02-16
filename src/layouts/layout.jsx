import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { StyledApp } from "../styles/global"

export default function RootLayout(){
    return <StyledApp
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85 }}>
        <Outlet />
        <Footer />
    </StyledApp>
}