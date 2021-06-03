import React from "react";
import {StyledScrollBlock} from "./ScrollBlock.styled";

type ScrollBlockProps = {
	onScroll?: (e: React.MouseEvent) => void
}

export const ScrollBlock: React.FC<ScrollBlockProps> = ({onScroll, ...props}) => {
	// @ts-ignore
	return <StyledScrollBlock {...props} onScroll={onScroll} />
}