import React from 'react'
import { PacmanLoader, PuffLoader } from "react-spinners"
import StyledLoader from "./loader.styles"

export default function Loader() {
    return (
        <StyledLoader>
            <PuffLoader size={100} color="#36d7b7" />
        </StyledLoader>
    )
}
