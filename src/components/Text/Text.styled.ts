import styled, {css} from "styled-components";
import {TextProps} from "../SubTitle/SubTitle";

export const StyledText = styled.p<TextProps>`
  color: white;
  ${({margin}) => margin && css`margin: ${margin}`};
  background-color: inherit;
`