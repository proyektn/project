import React from "react";
import {StyledText} from "./Text.styled";
import {TextProps} from "../SubTitle/SubTitle";

export const Text: React.FC<TextProps> = (props) => {
	return <StyledText {...props} />
}