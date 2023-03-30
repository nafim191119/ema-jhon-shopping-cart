import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, seller, quantity, price, ratings
    } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Star</p>
        </div>
    );
};

export default Product;