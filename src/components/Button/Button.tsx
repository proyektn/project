import React from "react";
import {StyledButton} from "./Button.styled";

export type ButtonProps = {
	onClick?: () => void
	disabled?: boolean
	empty?: boolean
	type?: "button" | "submit" | "reset" | undefined
}

export const Button: React.FC<ButtonProps> = ({onClick, disabled, type, ...props}) => {
	return <StyledButton type={type} onClick={onClick} disabled={disabled} {...props} />
}