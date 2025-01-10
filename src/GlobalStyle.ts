import { createGlobalStyle } from 'styled-components';
import { colors, font } from './styles';

const GlobalStyle = createGlobalStyle`
    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --color-text-dark: ${colors.semantic.text.dark};
        --color-background-light: ${colors.semantic.background.white};
        --font-size-paragraph: ${font.size.paragraph};
    }

    html {
        font-size: 62.5%; /* 10px */
    };

    html > body {
        font-family: 'Noto Sans KR', sans-serif;
        line-height: 1.5;
        font-weight: 400;
        color: var(--color-text-dark);
        background-color: var(--color-background-light);
        font-size: var(--font-size-paragraph);
    }

    @media (min-width: 768px) {
        /** 데스크탑 이하 디바이스 **/

        html {
            font-size: 68.75%;
        }
    }

`;

export default GlobalStyle;
