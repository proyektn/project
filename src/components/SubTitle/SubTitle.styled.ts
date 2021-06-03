import styled, {css} from "styled-components";
import {TextProps} from "./SubTitle";

export const StyledSubTitle = styled.h2<TextProps>`
  color: white;
  font-size: 10px;
  ${({margin}) => margin && css`margin: ${margin}`};
`