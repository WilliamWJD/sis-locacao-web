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

export const Form = styled.form`
    max-width: 422px;
    width: 100%;
    background-color: #fff;
    padding: 49px 39px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    a{
        color: #7F8C8D;
        align-self: center;
        margin-top: 19px
    }
`;