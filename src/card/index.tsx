import React, { useState } from "react";
import { Container } from "../showPassword/styles";
import {
    ButtonAddToCart,
    ContainerBodyCard,
    ContainerCard,
} from "./styles/styles";

import { ICardInfo } from "./types/types";
import { HeaderCard } from "./components/HeaderCard";
import { AddToCartNotExpand } from "./components/AddToCartNotExpand";
import { SkuSelectorColors } from "./components/SkuSelectorColors";
import { Product, _containerCardProps } from "./data/default.data";

const ReactCard: React.FC = (): JSX.Element => {
    const [cardInfo, setCardInfo] = useState<ICardInfo>({
        expand: true,
        product: Product,
        currentItemIndex: 0,
        wishList: false,
    });

    const handleToggleExpandProductCard = (): void => {
        setCardInfo((oldValue: ICardInfo): ICardInfo => {
            return {
                ...oldValue,
                expand: !oldValue.expand,
            };
        });
    };

    const handleSelectSkuItem = (indexSkuItem: number): void => {
        setCardInfo((oldValue: ICardInfo): ICardInfo => {
            return {
                ...oldValue,
                currentItemIndex: indexSkuItem,
            };
        });
    };

    const handleToggleWishList = (): void => {
        setCardInfo((oldValue: ICardInfo): ICardInfo => {
            return {
                ...oldValue,
                wishList: !oldValue.wishList,
            };
        });
    };

    return (
        <Container>
            <ContainerCard expand={cardInfo.expand} {..._containerCardProps}>
                <div className="__container-cover-item" />

                <AddToCartNotExpand />

                <HeaderCard
                    wishList={cardInfo.wishList}
                    handleToggleExpandProductCard={
                        handleToggleExpandProductCard
                    }
                    handleToggleWishList={handleToggleWishList}
                />

                <div className="__container-image-product">
                    <img
                        src={cardInfo.product.images[cardInfo.currentItemIndex]}
                        alt="Product chair"
                    />
                </div>

                <ContainerBodyCard expand={cardInfo.expand}>
                    <div className="__container-title-product">
                        <span className="__title-product">
                            {cardInfo.product.title}
                        </span>
                    </div>

                    <SkuSelectorColors
                        colors={cardInfo.product.skuSelectorColors}
                        currentItemIndex={cardInfo.currentItemIndex}
                        handleSelectSkuItem={handleSelectSkuItem}
                        label="Selecione a cor"
                    />

                    <div className="__container-price-product">
                        <span className="__price-currency-type">$</span>
                        <span className="__price-product-value">
                            {cardInfo.product.price.toFixed(2)}
                        </span>
                    </div>

                    <div className="__container-button-add-to-cart">
                        <ButtonAddToCart>Adicionar ao carrinho</ButtonAddToCart>
                    </div>
                </ContainerBodyCard>
            </ContainerCard>
        </Container>
    );
};

export { ReactCard };
