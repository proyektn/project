import React from "react";
import {StyledSubTitle} from "./SubTitle.styled";

export type TextProps = {
	color?: string
	margin?: string
}

export const SubTitle: React.FC<TextProps> = (props) => {
	return <StyledSubTitle {...props} />
}