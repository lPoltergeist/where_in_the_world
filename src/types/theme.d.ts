import { CustomTheme } from "./defaultTheme";

export interface MyComponentProps {
  children: ReactNode;
}

export interface ThemeContextType {
  theme: CustomTheme;
  toggleTheme: () => void;
}