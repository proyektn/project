import styled, {css} from "styled-components";
import {FlexContainerProps} from "./FlexContainer";

export const StyledFlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  padding: 10px;
  flex-direction: ${({column}) => column ? 'column' : 'row'};
  justify-content: ${({justify}) => justify ? justify : 'center'};
  align-items: ${({align}) => align ? align : 'center'};
  ${({grow}) => grow && css`flex: 1 0 auto`};
  ${({height}) => height && css`height: ${height}`};
  ${props => props.border && css`
    border: 2px solid ${props.theme.colors.gold}`};
`