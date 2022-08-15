import React from "react";
import { Cart } from "react-ionicons";

const AddToCartNotExpand: React.FC = (): JSX.Element => {
    return (
        <div className="__container-add-to-cart-not-expand">
            <Cart
                color="#ffffff"
                height="25px"
                width="25px"
                cssClasses="__icon-add-to-cart-not-expand"
            />
        </div>
    );
};

export { AddToCartNotExpand };
