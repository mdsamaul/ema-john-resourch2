import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';

const Products = (props) => {

    const { id, name, img, price, ratings, seller } = props.products;

    const { handlerAddToCart } = props;
    return (
        <div className='product-info'>
            <img src={img ? img : "No Images"} alt="" />
            <div className='product-datils'>
                <h3>{name}</h3>
                <p>Price: $ {price}</p>
                <div className='manufacturer-rating'>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} Start</p>
                </div>
            </div>
            <button onClick={() => handlerAddToCart(props.products)} className='add-to-cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Products;