import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string
            text: string
            elements: string
            homePageText: string
            detailPageText: string
        }
    }
}