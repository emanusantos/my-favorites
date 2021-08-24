import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Helvetica;
    background-color: #F7F7F7;

    @media (max-width: 50rem) {
        position: relative;
    };

}
`;

export default GlobalStyles;