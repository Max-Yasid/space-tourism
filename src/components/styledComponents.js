import styled from "styled-components";

export const PageTitle = styled.h2`
    color: white;
    font-family: var(--secondary-font);
    font-size: 28px;
    font-weight: 200;
    letter-spacing: 4.72px;
    span{
        color: #232731;
        font-weight: 700;
        color: rgba(255, 255, 255, .25);
        margin-right: 20px;
    }

    @media only screen and (max-width: 768px){
        letter-spacing: 3.38px;
        font-size: 20px;
        span{
            margin-right: 18px;
        }
    }

    @media only screen and (max-width: 375px){
        letter-spacing: 2.7px;
        font-size: 16px;
        text-align: center;
        margin: 0 auto;
    }
`;
