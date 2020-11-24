import styled from "styled-components"

export const SectionWrapper = styled.div`
  color: ${({dark}) => dark ? "white" : "black"};
  
  flex: 1;
  display: flex;
  justify-content: center;
`

export const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 750px;
  gap: 5px;
`
