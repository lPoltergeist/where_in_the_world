import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 10px;
    box-shadow: 0px 4px 14px 0px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;
    width: 300px;
    height: 400px;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
    }
`

export const Flag = styled.img`
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
`

export const CardContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
`

export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
`

export const CardText = styled.p`
    margin-bottom: 10px;
`