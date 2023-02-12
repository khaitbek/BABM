import { StyledButton } from "./button.styles";

export function Button({ variant, children, padding, borderRadius, type = "button" }) {
  switch (variant) {
    case "danger":
      return <StyledButton initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} type={type} style={{
        background: "#FF2059"
      }} padding={padding} borderRadius={borderRadius} >
        {children}
      </StyledButton>

    default:
      return <StyledButton>
        {children}
      </StyledButton>
  }
}
