import styled from "styled-components";

export const ProjectsGrid = styled.div`
 max-width: 1200px;
 margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`