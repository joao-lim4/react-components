interface IContainerCardCssProps {
    initialValues: {
        width: string
        height: string
    }
    expand?: boolean
    expandValues: {
        width: string
        height: string
    }
};

interface IProduct {
    title: string,
    price: number,
    images: Array<string>
    skuSelectorColors: Array<string>
    isAvailable: boolean
}

interface IContainerBodyCssProps {
    expand: boolean
}

interface IContainerSkuSelectorItemCssProps {
    color: string
    active: boolean
}

interface ICardInfo {
    expand: boolean,
    product: IProduct,
    wishList: boolean,
    currentItemIndex: number
}

interface IHeaderCardProps {
    handleToggleExpandProductCard: () => void;
    handleToggleWishList: () => void;
    wishList: boolean;
}


interface ISkuSelectorColorsProps {
    colors: Array<string>;
    label: string;
    currentItemIndex: number;
    handleSelectSkuItem: (indexSkuItem: number) => void;
}


export type { IContainerCardCssProps, ICardInfo, IProduct, IContainerBodyCssProps, IContainerSkuSelectorItemCssProps, IHeaderCardProps, ISkuSelectorColorsProps }