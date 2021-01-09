import React from "react";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";



function Orders() {
    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList />
        </div>
    )
}

export default Orders;