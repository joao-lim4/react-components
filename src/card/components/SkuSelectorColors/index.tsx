import React from "react";
import { ContainerSkuSelectorItem } from "../../styles/styles";
import { ISkuSelectorColorsProps } from "../../types/types";

const SkuSelectorColors: React.FC<ISkuSelectorColorsProps> = ({
    colors,
    currentItemIndex,
    handleSelectSkuItem,
    label,
}): JSX.Element => {
    return (
        <div className="__container-sku-selector">
            <label>{label}</label>
            <div>
                {colors.map(
                    (colorSelect: string, index: number): JSX.Element => {
                        return (
                            <ContainerSkuSelectorItem
                                color={colorSelect}
                                active={index === currentItemIndex}
                                onClick={() => handleSelectSkuItem(index)}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export { SkuSelectorColors };
