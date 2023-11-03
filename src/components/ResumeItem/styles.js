import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ED217C;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;
    ;

@media(max-width: 750px) {
    width: 20%;
    p{
        font-size: 12px;
    }
    span{
        font-size: 20px;
    }
    svg{
        display: none;
    }
}
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin: 20px auto;

    svg{
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`;