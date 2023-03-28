import React from 'react';
import './OrderCart.css';
const OrderCart = (props) => {
    const { orderCart } = props;
    const allProduct = props.orderCart;

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
        <div className='cart-details'>
            <h3>Selected Items: {quantity}</h3>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: $ {shoppingCharge.toFixed(0)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <hr />
            <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <hr />
        </div>
    );
};

export default OrderCart;