import { createGlobalStyle } from "styled-components";

export const GlobalStyle = 
createGlobalStyle`
:root {
        --blue: #56a2f9;
        --green: #2ea043;
        --shape: #161b22;
        --shape-light: #2e3948;
        --background: #010409;
        --text: #f0f6fc;
        --text-secondary: #afb5bb;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        outline: none;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight:700;
    }

    button{
        cursor: pointer;
        border: 0;
        background-color: inherit;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style:none;
    }
    `