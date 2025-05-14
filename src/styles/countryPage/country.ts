import styled from "styled-components";

export const CountryContainer = styled.main`
    margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 1000px;
   max-width: 1300px;
`
export const FlagContainer = styled.aside`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 600px;
    height: 1000px;

   img{
    width: 100%;
    height: 50%;
    object-fit: cover;
   }
`

export const BackButton = styled.div`
width: 100%; 
display: flex;
justify-content: flex-start
margin-bottom: 20px;

button {
position: absolute;
top: 200px;

display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 40px;
margin-bottom: 20px;

height: 50px;
width: 150px;
border-radius: 5px;

background-color: ${({ theme }) => theme.colors.elements};
color: ${({ theme }) => theme.colors.text};
box-shadow: 0px 4px 14px 0px rgba(0,0,0,0.55);
font-size: 18px;
font-weight: 500;
transition: all 0.3s ease-in-out;
cursor: pointer;
outline: none;
border: none;

&:hover {
    transform: scale(1.1);
}

`

export const InfoContainer = styled.section`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 550px;
    height: 1000px;
    
    h1 {
        margin-bottom: 30px;
        font-size: 36px;
        font-weight: 800;
    }

    p {
        font-size: 16px;
        font-weight: 600;
    }
`

export const InnerInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    p {
    margin-bottom: 10px;
    }
`

export const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 1rem;
  flex-wrap: nowrap;
  width: 100%;

  p {
    font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  }
`;



export const BordersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  flex: 1;
`;



export const BorderBox = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  
  min-width: 100px;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease-in-out;
`;

