import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

    body{
    margin: 0;
    background-color: whitesmoke;
    
    }
    
    h2{
        margin-bottom: 0;
	    margin-top: 0;
    }
    p{
        margin: 0;
    }
    ul{
        display: flex;
        flex-direction: column;
	    padding: 0;

    }
    li{
        list-style: none;
        display: flex;
        margin: 0;

    }
    button{
        background-color: transparent;
        border: 1px solid black;
        border-radius: 1rem;
        height: 30px;
        width: 100px;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

`;

export { GlobalStyles };
