import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { colorStack } from './colorStack';


export const GlobalStyle = createGlobalStyle`
    ${reset}
    html
    {
        font-size: 23px;
        
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
      
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
    }
    
    nav ul li {
        -webkit-transition: background-color .3s;
        transition: background-color .3s;
        float: left;
        padding-top: 15px;

    }

    p {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    h1 {
        padding-top: 10px;
        

    }
    
    {
        padding-top: 10px;
    }
    p .popka
    {
        
    }
    

`;