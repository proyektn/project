import styled, {css} from "styled-components";
import {FlexContainerProps} from "./FlexContainer";

export const StyledFlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  padding: 10px;
  background-color: inherit;
  flex-direction: ${({column}) => column ? 'column' : 'row'};
  ${({justify}) => justify && css`justify-content: ${justify}`};
  ${({align}) => align && css`align-items: ${align}`};
  ${({grow}) => grow && css`flex: 1 0 auto`};
  ${({height}) => height && css`min-height: ${height}`};
  ${({width}) => width && css`width: ${width}`};
  ${props => props.border && css`
    border: 2px solid ${props.theme.colors.gold}`};
`