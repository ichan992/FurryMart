
import { ImageSourcePropType } from 'react-native';
export default interface ProductInterface {
    product_name: string;
    description: string;
    thumbnail: ImageSourcePropType;
    images: ImageSourcePropType[];
    price: number;
    category?: string; // Making the category field optional
}

export default interface CartItemsInterface{
    price : number,
    product_name : string,
    thumbnail : ImageSourcePropType,
    qty : number,
}
