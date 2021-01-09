import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import { OrderLocationdata, ProductProps } from "./types";
import { fetchProducts } from '../api';
import OrderLocation from "./OrderLocation";

function Orders() {
    const [products, setProducts] = useState<Array<ProductProps>>([]);
    const [location , setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data))
        .catch(error => console.log('error', error))
    }, [])

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation  onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    )
}

export default Orders;