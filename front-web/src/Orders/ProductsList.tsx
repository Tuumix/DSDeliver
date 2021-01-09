import ProductCard from "./ProductCard";
import './styles.css';
import { ProductProps } from "./types";

type Props = {
    products: ProductProps[];
}

function ProductsList({ products }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {
                    products.map((product, key) => (
                        <ProductCard product={product} key={key}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList;