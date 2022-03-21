import { createContext, useEffect, useState, useContext} from 'react';
import { parseCookies, setCookie} from 'nookies';
import { useRouter } from 'next/router';

// const Router = useRouter();

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const isAuthenticated = false;

    // async function singIn (data) {
    //     const { users, token } = await fetch(`/dye/v3/api/auth`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             email:  data.email,
    //             password: data.password,
    //             remember: true
    //             })
    //         })
    //         // Create cookies with nookies
    //         const cookies = parseCookies();
    //         const { token } = await response.json();
    //         setCookie(null, 'token', token, {
    //             maxAge: 30 * 24 * 60 * 60,
    //             path: '/',
    //         });
    //         setUser(
    //             users
    //         )
    //         Router.push('/dashboard');
    //         return token, users;
    // }
    

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
        <AuthContext.Provider value={{ cart, handleAddtoCart, handleRemoveItemFromCart, clearCart, hadlesItemCartLength, getCart}}>
            {children}
        </AuthContext.Provider>
    );
}