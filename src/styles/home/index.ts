import styled from "styled-components";

export const Main = styled.main`
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
min-height: 100vh;
margin: 0 auto;
`

export const Section = styled.section`
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
min-height: 100vh;
max-width: 1400px;
margin: 20px auto;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 20px;
`