import React from "react";
import {StyledTitle} from "./Title.styled";
import {TextProps} from "../SubTitle/SubTitle";

export const Title: React.FC<TextProps> = (props) => {
	return <StyledTitle {...props} />
}