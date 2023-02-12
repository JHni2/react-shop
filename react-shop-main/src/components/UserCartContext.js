import React, {createContext, useEffect, useState} from "react";
import {data, data as products} from "./Products";

export const UserCartStore = createContext();


const UserCartContext = (props) => {
    //test
    const saveLocal = (id, amount) => {

        const carts = localStorage.getItem("carts");
        // [{"id":2,"amount":6},{"id":2,"amount":7},{"id":2,"amount":8},{"id":14,"amount":1}]

        if (carts === null) {
            const cartArr = [];
            cartArr.push({
                id: id,
                amount: amount,
            });
            localStorage.setItem("carts", JSON.stringify(cartArr));
            return;
        }

        const cartArr = JSON.parse(carts);

        const foundIndex = cartArr.findIndex(cart => {
            return cart.id === id;
        });

        if(foundIndex < 0) {
            cartArr.push({id, amount});
        } else {
            const item = cartArr[foundIndex];
            item.amount = amount;
        }
        localStorage.setItem("carts", JSON.stringify(cartArr));
    };

    let isNoCart = true;
    let initCartPrice = 0;

    const storageCart = localStorage.getItem("carts");
    let initCartArr = [];
    if(storageCart !== null) {
        isNoCart = false;
        initCartArr = JSON.parse(storageCart)
    }

    const allData = [].concat(products.accessory.items, products.fashion.items, products.digital.items);

    initCartArr.map(cart => {

        const matchCart = allData.find(element => {
            return element.id === cart.id
        });
        cart.title = matchCart.title;
        cart.src = matchCart.src;
        cart.price = matchCart.price;

        initCartPrice += Number(cart.price.substring(1) * cart.amount);

        return cart;
    });


    const [cart, setCart] = useState(initCartArr);

    const [cartId, setCartId] = useState([]);

    const [cartCount, setCartCount] = useState(0);

    const [cartPrice, setCartPrice] = useState(initCartPrice);

    const [noCart, setNoCart] = useState(isNoCart);

    const onclickCart = (props) => {
        setNoCart(false);
        let productPrice = Number(props.price.substring(1));

        if (cartId.includes(props.id)) {
            let cartAmount = props.amount + 1;
            props.amount = cartAmount;
            setCartCount(cartAmount);
            setCartPrice(price => price + productPrice);

        } else {
            setCart([...cart, props]);
            setCartId([...cartId, props.id]);
            setCartPrice(price => price + productPrice);
        }

        //test
        saveLocal(props.id, props.amount);


    };


    const amountDecrease = (index) => {
        const newCart = [...cart];
        newCart[index].amount--;
        setCart(newCart);

        let productPrice = Number(newCart[index].price.substring(1));
        setCartPrice(cartPrice - productPrice);

        //test
        saveLocal(newCart[index].id, newCart[index].amount);


    };

    const amountIncrease = (index) => {
        const newCart = [...cart];
        newCart[index].amount++;
        setCart(newCart);

        let productPrice = Number(newCart[index].price.substring(1));
        setCartPrice(cartPrice + productPrice);

        //test
        saveLocal(newCart[index].id, newCart[index].amount);
    };

    const buyCart = () => {
        if (window.confirm("구매하시겠습니까? 장바구니의 모든 상품들이 삭제됩니다.")) {
            setCart([]);
            setCartCount(0);
            setCartPrice(0);
            setNoCart(true);
            alert("구매가 완료되었습니다.");
        }
    };


    const UserCart = {
        cart,
        setCart,
        onclickCart,
        cartId,
        setCartId,
        amountIncrease,
        amountDecrease,
        cartCount,
        setCartCount,
        cartPrice,
        setCartPrice,
        buyCart,
        noCart,
        setNoCart
    };


    return (
        <UserCartStore.Provider value={UserCart}>
            {props.children}
        </UserCartStore.Provider>
    );
};

export default UserCartContext;
