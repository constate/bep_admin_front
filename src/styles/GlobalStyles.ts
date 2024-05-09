import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        /* font-family: 'Pretendard', sans-serif; */
        font-family: 'NanumSquare', dotum, sans-serif;
    }    
    html, body {
        height: 100vh;
        background-color: #f0f4f9;
        overflow: hidden;
    }
    #root, .App {
        height: inherit;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, input, textarea,
    a, dl, dt, dd, ol, ul, li, form, label, table, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        
        &::-webkit-scrollbar {
            width: 1.2rem;
            height: 1.2rem;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
            border-radius: 1.2rem;
            
        }
        &::-webkit-scrollbar-thumb {
            background-color: #d3d3d3;
            border-radius: 1.2rem;
            height: 10rem;
        }
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        padding: 0;
        background: transparent;
        cursor: pointer;
    }
`;
