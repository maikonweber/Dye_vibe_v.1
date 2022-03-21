import { createContext, useEffect, useState, useContext} from 'react';
import {parseCookies, setCookie} from 'nookies';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [cart, setCart] = useState([]);
    const auth = 'authetication'

function handleAddtoCart(url, name , price) {
    const itemObject =  { url , name , price}
    setCart({...cart, itemObject})
}

function handleRemoveItemFromCart(clickedItemIndex) {
    const filteredCart = cart.filter((item, index) => index !== clickedItemIndex);
    setCart(filteredCart);
}

function clearCart() {
    setCart([]);
}

function hadlesItemCartLength() {
    return cart.length;
}


// Take cart from localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    const cartObj = JSON.parse(cart);
    if (cartObj === null) {
        return [];
    } else {
        return setCart(cartObj);
    }
}


    
    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        console.log(token, "token")
        getCart();

    }, []);

    return (
        <AuthContext.Provider value={{cart, handleAddtoCart, handleRemoveItemFromCart, clearCart, hadlesItemCartLength, getCart}}>
            {children}
        </AuthContext.Provider>
    );
}