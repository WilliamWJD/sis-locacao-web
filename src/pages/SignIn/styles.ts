import styled from 'styled-components';

import backSignInImage from '../../images/backSignIn.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #30336B;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${backSignInImage});
    background-repeat: no-repeat;
    background-position: bottom left;
`;

export const Content = styled.div`
    max-width: 422px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        height: 180px;
        margin-bottom: 49px;
    }
`;

export const Form = styled.div`
    max-width: 422px;
    width: 100%;
    background-color: #fff;
    padding: 49px 39px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    button{
        height: 50px;
        background-color: #27AE60;
        border: none;
        font-weight: 700;
        color: #fff;
        border-radius: 10px;
        font-size: 17px;
        transition: background-color 0.2s;
    }

    a{
        color: #7F8C8D;
        align-self: center;
        margin-top: 19px
    }

    button:hover{
        background-color: #158D48;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 19px;

    label{
        color: #7F8C8D;
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

export const InputBox = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #7F8C8D;
    padding: 5px 18px;

    display: flex;
    align-items: center;

    svg{
        margin-right: 10px;
    }

    input{
       width: 100%;
       height: 100%;
       border: 0 none;
       outline: 0;

       font-size: 15px;
    }
`;
