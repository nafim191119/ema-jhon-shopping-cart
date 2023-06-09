import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        name={product.id}
                        product = {product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;