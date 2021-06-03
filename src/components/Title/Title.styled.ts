import styled, {css} from "styled-components";
import {TextProps} from "../SubTitle/SubTitle";

export const StyledTitle = styled.h1<TextProps>`
  color: ${props => props.theme.colors.gold};
	${({margin}) => margin && css`margin: ${margin}`};
`

