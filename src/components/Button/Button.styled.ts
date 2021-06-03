import styled, {css} from "styled-components";
import {ButtonProps} from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.theme.colors.gold};
  border: none;
  background: inherit;
  padding: 10px;
  margin: 10px;
  ${({disabled}) => disabled && css`opacity: 0.4`};
`