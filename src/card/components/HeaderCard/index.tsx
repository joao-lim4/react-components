import React from "react";
import { ExpandOutline, Heart, HeartOutline } from "react-ionicons";
import { IHeaderCardProps } from "../../types/types";

const HeaderCard: React.FC<IHeaderCardProps> = ({
    handleToggleExpandProductCard,
    handleToggleWishList,
    wishList,
}): JSX.Element => {
    return (
        <div className="__container-header-card">
            <div
                onClick={handleToggleExpandProductCard}
                className="__container-expand-item"
            >
                <ExpandOutline
                    color="#0000000"
                    height="20px"
                    width="20px"
                    cssClasses="__icon-expand-card"
                />
            </div>
            <div
                onClick={handleToggleWishList}
                className="__container-wish-list"
            >
                {wishList && (
                    <Heart
                        color="red"
                        height="20px"
                        width="20px"
                        cssClasses="__icon-heart-wish-list"
                    />
                )}
                {!wishList && (
                    <HeartOutline
                        color="red"
                        height="20px"
                        width="20px"
                        cssClasses="__icon-heart-wish-list"
                    />
                )}
            </div>
        </div>
    );
};

export { HeaderCard };
