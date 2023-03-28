import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderCart.css';
const OrderCart = (props) => {
    const { orderCart } = props;
    const allProduct = props.orderCart;

    const { handlerRemoveCart } = props;
    let totalPrice = 0;
    let shoppingCharge = 0;
    let quantity = 0;
    for (const totallProduct of allProduct) {
        // if (totallProduct.quantity === 0) {
        //     totallProduct.quantity = 1;
        // }
        // totallProduct.quantity = totallProduct.quantity || 1;
        totalPrice += totallProduct.price * totallProduct.quantity;
        shoppingCharge += totallProduct.shipping * totallProduct.quantity;
        quantity += totallProduct.quantity;
    }

    const tax = totalPrice * .10;
    const grandTotal = totalPrice + shoppingCharge + tax;

    return (
        <>
            <div className='cart-details'>
                <h3>Selected Items: {quantity}</h3>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: $ {shoppingCharge.toFixed(0)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>


            </div>
            <div>
                <hr />
                <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <hr />
            </div>
            <div className='clear-review-btn-container'>
                <button onClick={handlerRemoveCart} className='clear-btn clear-review-btn'>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></button>
                <button className='review-btn clear-review-btn'>Review Order<FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </>
    );
};

export default OrderCart;