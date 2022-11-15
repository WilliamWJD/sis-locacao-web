import styled from 'styled-components';

export const Container = styled.div`
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
