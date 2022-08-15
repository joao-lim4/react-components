import { IContainerCardCssProps, IProduct } from "../types/types";
import FirstImage from "../assets/1.jpg";
import SecoundImage from "../assets/2.jpg";
import ThirdImage from "../assets/3.jpg";

const Product: IProduct = {
    images: [FirstImage, SecoundImage, ThirdImage],
    isAvailable: true,
    price: 356.93,
    skuSelectorColors: ["#ccb37d", "#3f3f3f", "#dbdbdb"],
    title: "Cadeira de centro",
};

const _containerCardProps: IContainerCardCssProps = {
    expandValues: {
        height: "450px",
        width: "300px",
    },
    initialValues: {
        height: "225px",
        width: "225px",
    },
};

export { Product, _containerCardProps }