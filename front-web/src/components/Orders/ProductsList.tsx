import { checkIsSelected } from "./Helper";
import ProductCard from "./ProductCard";
import './styles.css';
import { ProductProps } from "./types";

type Props = {
    products: ProductProps[];
    selectedProducts: ProductProps[];
    onSelectProduct: (product: ProductProps) => void;
}

function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {
                    products.map((product, key) => (
                        <ProductCard product={product} key={key} onSelectProduct={onSelectProduct}  isSelected={checkIsSelected(selectedProducts, product)}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList;