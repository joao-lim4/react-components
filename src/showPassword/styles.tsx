import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerGroup = styled.div`
    position: relative;
    user-select: none;

    .__container-icon {
        position: absolute;
        top: 50%;
        right: 15px;
        z-index: 5;
        transform: translate(0, -50%);
        cursor: pointer;
    }
`;

const PasswordInput = styled.input`
    width: 350px;
    height: 45px;
    border-radius: 10px;
    border: 2px solid transparent;
    padding: 0 15px;
    outline: none;
    font-family: "Poppins", sans-serif;
    transition: border 0.2s ease;
    box-shadow: 0px 0px 30px 0px #00000014;

    &:focus {
        border: 2px solid #8b4ca9;
    }
`;

export { Container, ContainerGroup, PasswordInput };
