import styled, {css} from "styled-components";

type PopupStyledProps = {
	topLine: boolean
}

export const StyledPopup = styled.div<PopupStyledProps>`
  background-color: ${({theme}) => theme.colors.red};
  width: 100%;
  border: 2px solid ${({theme}) => theme.colors.gold};
  padding: 10px;
  border-top: none;
  position: relative;
  ${({topLine}) => topLine && css`
    &:before {
      content: '';
      width: 80%;
      height: 2px;
      background-color: ${({theme}) => theme.colors.gold};
      position: absolute;
      top: 0;
      left: 10%;
    }
  `}
`

export const Hidden = styled.div`
  position: absolute;
  max-height: 50vh;
  overflow: scroll;
  overflow-x: hidden;
  bottom: 0;
  background-color: ${({theme}) => theme.colors.red};
  width: 100%;
  border: 2px solid ${({theme}) => theme.colors.gold};
  border-bottom: none;
  padding: 10px;
`

export const Inner = styled.div`
  position: relative;
`