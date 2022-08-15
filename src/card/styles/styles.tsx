import styled from "styled-components";
import {
    IContainerBodyCssProps,
    IContainerCardCssProps,
    IContainerSkuSelectorItemCssProps,
} from "../types/types";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ContainerCard = styled.div<IContainerCardCssProps>`
    width: ${({ expand, expandValues, initialValues }) =>
        expand ? expandValues.width : initialValues.width};
    height: ${({ expand, expandValues, initialValues }) =>
        expand ? expandValues.height : initialValues.height};
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    background: #ffffff;
    user-select: none;
    box-shadow: 0px 0px 30px 0px #1a1a1a1a;
    transition: all 0.5s ease;

    .__container-cover-item {
        width: ${({ expand, expandValues, initialValues }) =>
            expand ? expandValues.width : initialValues.width};
        height: ${({ expand, expandValues, initialValues }) =>
            expand ? expandValues.height : initialValues.height};
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        position: absolute;
        left: 0;
        transition: all 0.5s ease;
        top: 0;
        z-index: ${({ expand }) => (expand ? -1 : 2)};
    }

    .__container-add-to-cart-not-expand {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #16ce16;
        bottom: -100%;
        cursor: pointer;
        left: 50%;
        opacity: 0;
        transition: all 0.5s ease;
        transform: translate(-50%, 0);
        position: absolute;
        z-index: 5;

        .__icon-add-to-cart-not-expand {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .__container-header-card {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 0;
        top: ${({ expand }) => (expand ? "10px" : "-100%")};
        z-index: 5;
        opacity: ${({ expand }) => (expand ? 1 : 0)};
        transition: all 0.5s ease;
    }

    .__container-expand-item {
        width: 35px;
        height: 35px;
        border-radius: 25px;
        background: #ffffff;
        margin-left: 10px;
        cursor: pointer;
        position: relative;

        .__icon-expand-card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .__container-wish-list {
        width: 35px;
        height: 35px;
        border-radius: 25px;
        position: relative;
        background: #ffffff;
        margin-right: 10px;
        cursor: pointer;

        .__icon-heart-wish-list {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .__container-image-product {
        text-align: center;
        height: min-content;
    }

    &:hover > .__container-header-card {
        top: 10px;
        opacity: 1;
    }

    &:hover > .__container-cover-item {
        opacity: ${({ expand }) => (expand ? 0 : 1)};
    }

    &:hover > .__container-add-to-cart-not-expand {
        bottom: ${({ expand }) => (expand ? "-100%" : "10px")};
        opacity: 1;
    }
`;

const ContainerBodyCard = styled.div<IContainerBodyCssProps>`
    width: 100%;
    height: 100%;

    .__container-title-product {
        width: 100%;
        text-align: center;

        .__title-product {
            font-size: 1.3rem;
            font-weight: bold;
            color: #333333;
            font-family: "Poppins", sans-serif;
        }
    }

    .__container-sku-selector {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0px 0px 0px;

        label {
            font-size: 0.85rem;
            font-weight: bold;
            color: #636363;
            font-family: "Poppins", sans-serif;
        }

        div {
            display: flex;
            margin-top: 4px;
        }
    }

    .__container-price-product {
        width: 100%;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #16ce16;

        .__price-currency-type {
            font-size: 1.65rem;
            font-family: "Poppins", sans-serif;
            font-style: italic;
        }

        .__price-product-value {
            font-size: 1.2rem;
            font-family: "Poppins", sans-serif;
            font-style: italic;
            margin-left: 2.5px;
        }
    }

    .__container-button-add-to-cart {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }
`;

const ContainerSkuSelectorItem = styled.div<IContainerSkuSelectorItemCssProps>`
    width: 20px;
    height: 20px;
    border-radius: 25px;
    background: ${({ color }) => color};
    margin: 0px 5px;
    cursor: pointer;
    position: relative;
    transition: all 0.5s ease;

    &::before {
        content: "";
        position: absolute;
        top: -3px;
        left: -3px;
        width: 22px;
        height: 22px;
        border-radius: 25px;
        background: transparent;
        border: ${({ active }) =>
            active ? "2px solid red" : "2px solid transparent"};
        transition: border 0.3s ease;
    }
`;

const ButtonAddToCart = styled.button`
    width: 70%;
    height: 45px;
    background: #9f25d8;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    transition: all 0.5s ease;
    color: #ffffff;
`;

export {
    Container,
    ContainerCard,
    ContainerBodyCard,
    ContainerSkuSelectorItem,
    ButtonAddToCart,
};
