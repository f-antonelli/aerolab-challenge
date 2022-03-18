import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.25rem, 1fr));
  grid-template-rows: 17.25rem;
  gap: 1rem;
  margin: 1rem 8rem;
  justify-items: center;
  @media (max-width: 950px) {
    margin: 2rem !important;
  }
`
