import { DefaultTheme } from "styled-components";

interface CustomTheme extends DefaultTheme {
    colors: {
        background: string;
        text: string;
        elements: string;
    }
}