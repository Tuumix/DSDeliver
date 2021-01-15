export interface ProductProps{
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export interface OrderLocationData{
    latitude: number;
    longitude: number;
    address: string;
}

type ProductID = {
    id: number;
}

export type OrderPayLoad = {
    products: ProductID[];
} & OrderLocationData;