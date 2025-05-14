import styled from "styled-components";

export const FilterSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease-in-out;
    max-width: 1400px;
    height: 100px;
    cursor: pointer;
`

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 35px 0 30px;
    background: ${({ theme }) => theme.colors.elements};
    box-shadow: 0px 4px 14px 0px rgba(0,0,0,0.15);
    color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
`

export const NameInput = styled.input`
    width: 400px;
    height: 60px;
    border: none;
    padding: 30px;
    outline: none;
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.colors.homePageText};
    transition: all 0.3s ease-in-out;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text};
    }
`

export const SelectInput = styled.select`
  width: 250px;
  height: 60px;
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 4px 14px 0px rgba(0,0,0,0.15);
  font-size: ${({ theme }) => theme.colors.homePageText};
  transition: all 0.3s ease-in-out;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 16px;

  option {
      background-color: ${({ theme }) => theme.colors.elements};
      color: ${({ theme }) => theme.colors.text};
      padding: 10px;
      
      &:hover {
        background-color: #f1f1f1;
      }
    }
`;
