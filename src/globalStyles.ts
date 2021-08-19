import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Montserrat';
    background-color: #F7F7F7;
};
`;

export default GlobalStyles;