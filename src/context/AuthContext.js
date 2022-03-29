import { createContext, useEffect, useState, useContext} from 'react';
import { parseCookies, setCookie} from 'nookies';
import { useRouter } from 'next/router';
import { getDashboardUser } from '../services/service';

// const Router = useRouter();

export const AuthContext = createContext({});


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [acceptCookie, setAcceptCookie] = useState(false);
    const [cart, setCart] = useState([]);
    const auth = 'authetication'

    const router = useRouter();

    const aceptCookie = async () => {
        setCookie(null, 'acceptCookie', true, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
            });
        console.log(cookies)
    }

    const isAuthenticated = false;

    async function singIn (data) {
     // Check cookie if user is aceptCooki
     const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/loginIn", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'acceptCookies' : 'true'},
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                })
            })
            const resp = await response.json();
            console.log(resp)
                setCookie(null, 'x-auth-token', resp, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                });
                router.push('/dashboard');
            }

            async function singAdm (data) {
                // Check cookie if user is aceptCooki
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/loginInAdm", {
                           method: 'POST',
                           headers: { 'Content-Type': 'application/json',
                                       'acceptcookies' : 'true'},
                           body: JSON.stringify({
                               email: data.email,
                               password: data.password,
                           })
                       })
                       const resp = await response.json();
                       console.log(resp)
                           setCookie(null, 'x-auth-adm', resp, {
                               maxAge: 30 * 24 * 60 * 60,
                               path: '/',
                           });
                           router.push('/adminPage');
                       }       



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

    const { 'x-auth-token' : token_ } = parseCookies();
    const { 'acceptCookie' : cookies } = parseCookies();
    const { 'x-auth-adm' : adm } = parseCookies();  
    
    useEffect(() => {
        if (token_) {
            setToken(token_);
        }
        if (cookies) {
            setAcceptCookie(cookies);
        }
        if (adm) {
            setToken(adm);
        }
    }, [token_, cookies, adm]);



    useEffect(() => {
       const { 'x-auth-token' : token_ } = parseCookies();
         if (token_) {
            getDashboardUser(token_).then(data => {
                console.log(data)
                setUser(data);
            }
        )}

    }, [])



    return (
        <AuthContext.Provider value={{user , acceptCookie, token, cart, singAdm, singIn, handleAddtoCart, handleRemoveItemFromCart, clearCart, hadlesItemCartLength, getCart}}>
            {children}
        </AuthContext.Provider>
    );
}