import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import OrderCart from '../OrderCart/OrderCart';
import Products from '../Products/Products';
import './Shops.css';
const Shops = () => {
    const [products, setProduces] = useState([]);
    const [orderCart, setOrderCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduces(data));
    }, []);
    useEffect(() => {
        const saveCart = [];
        const stroedCard = getShoppingCart();
        // console.log(stroedCard);
        //get the id
        for (const id in stroedCard) {
            //step 2 : get the product by using id
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                //step 3: get quantity of the product
                const quantity = stroedCard[id];
                // console.log(quantity);
                addedProduct.quantity = quantity;
                //step 4: add the addedproduct to the saved cart
                saveCart.push(addedProduct);
            }

        }
        setOrderCart(saveCart);

    }, [products]);

    const handlerRemoveCart = () => {
        const newCart = [];
        setOrderCart(newCart);
        deleteShoppingCart();
    }
    const handlerAddToCart = (product) => {
        let newCart = [];
        const exists = orderCart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...orderCart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = orderCart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        // const newCart = [...orderCart, product];
        setOrderCart(newCart);
        addToDb(product.id)
    };


    return (
        <div className='product-order-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products
                        products={product}
                        key={product.id}
                        handlerAddToCart={handlerAddToCart}

                    ></Products>)
                }
            </div>
            <div className='order-summary'>
                <h4>Order Summary</h4>
                {
                    <OrderCart
                        orderCart={orderCart}
                        handlerRemoveCart={handlerRemoveCart}
                    ></OrderCart>
                }
            </div>
        </div>
    );
};

export default Shops;