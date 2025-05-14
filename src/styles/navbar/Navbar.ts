import styled from "styled-components";

export const NavbarWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0 50px;
    box-shadow: 0px 4px 14px 0px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;
`

export const ThemeButton = styled.button`
    color: ${({ theme }) => theme.colors.text};
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    &&:hover {
        transform: scale(1.1);
    }
`