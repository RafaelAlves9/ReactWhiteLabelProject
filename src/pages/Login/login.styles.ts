import styled from "styled-components";

export const Container = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    padding: 3rem;
    width: 95%;
    max-width: 25rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    border-radius: .7rem;
    gap: 1.2rem;

    > button{
        font-weight: 600;
    }
`

export const TitleContainer = styled.div`
    text-align: center;
    
    > h2{
        font-weight: 600;
        color: #4B4B4B;
        font-family: 'Inter', sans-serif;
    }
    > p{
        margin-top: .5rem;
        color: #4B4B4B;
        font-weight: 300;
        font-family: 'Inter', sans-serif;
    }
`

export const ForgotPasswordAction = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;

    > p{
        font-size: .9rem;
        color: red;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
    }
`
