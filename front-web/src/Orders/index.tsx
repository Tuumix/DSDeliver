import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import { OrderLocationData, ProductProps } from "./types";
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
import { checkIsSelected } from "./Helper";
import { toast } from 'react-toastify';

function Orders() {
    const [products, setProducts] = useState<Array<ProductProps>>([]);
    const [selectedProducts, setSelectedProducts] = useState<Array<ProductProps>>([]);
    const [orderLocation , setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {return sum + item.price},0)

    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data))
        .catch(error => console.log('error', error))
    }, [])

    const handleSelectProduct = (product: ProductProps) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        saveOrder(payload).then((response) => {
            toast.error(`Pedido enviado com sucesso! Número ${response.data.id}`);
            setSelectedProducts([]);
        })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList products={products} onSelectProduct={handleSelectProduct} selectedProducts={selectedProducts}/>
                <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
                <OrderSummary amount={selectedProducts.length} totalPrice={totalPrice} onSubmit={() => handleSubmit()}/>
            </div>
            <Footer />
        </>
        
    )
}

export default Orders;