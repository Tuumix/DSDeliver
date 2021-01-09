import { ProductProps } from "./types";

export function checkIsSelected(selectedProducts: ProductProps[], product: ProductProps) {
    return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return formatter.format(price);
}
