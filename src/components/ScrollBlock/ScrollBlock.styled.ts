import styled from "styled-components";

export const StyledScrollBlock = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
  flex: 1 0 auto;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`