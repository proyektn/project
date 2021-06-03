import {StyledFlexContainer} from "./FlexContainer.styled";
import React from "react";

export type FlexContainerProps = {
	column?: boolean
	justify?: string
	align?: string
	border?: boolean
	height?: string
	width?: string
	grow?: boolean
}

export const FlexContainer: React.FC<FlexContainerProps> = (props) => {
	return <StyledFlexContainer {...props} />
}