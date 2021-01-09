import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import { ProductProps } from "./types";
import { fetchProducts } from '../api';

function Orders() {
    const [products, setProducts] = useState<Array<ProductProps>>([]);
    console.log('dededededde--<>', products);
    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data))
        .catch(error => console.log('error', error))
    }, [])

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;