import styled, {css} from "styled-components";

export const StyledInputNumber = styled.input.attrs({type: 'tel'})`
  background: inherit;
  border: none;
	text-align: center;
	height: 36px;
	font-size: 18px;
	font-weight: bold;
	&::placeholder{
		color: ${({theme}) => theme.colors.gold};
	}
	${({theme}) => css`
	border-bottom: 1px solid ${theme.colors.gold};
		color: ${theme.colors.gold}
	`};
`