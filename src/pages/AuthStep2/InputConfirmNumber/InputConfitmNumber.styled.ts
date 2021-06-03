import styled from "styled-components";
import mask from '../../../assets/image/InputConfirm.svg'

export const StyledInputConfirmNumber = styled.input.attrs({type: 'tel'})`
  width: 220px;
  height: 32px;
  border: none;
  background: none;
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.theme.colors.gold};
  outline: inherit;
  position: relative;
  letter-spacing: 26px;
`

export const StyledCell = styled.div`
  &::before {
    content: '';
    width: 216px;
    height: 54px;
    position: absolute;
    top: -10px;
    left: -12px;
    background: url(${mask}) no-repeat center;
  }
`

export const ContainerImage = styled.div`
position: relative;
`