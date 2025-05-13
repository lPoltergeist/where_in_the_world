import styled from "styled-components";

export const FilterSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    background: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 10px;
    box-shadow: 0px 4px 14px 0px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;
    max-width: 1400px;
    height: 200px;
    
    cursor: pointer;
`