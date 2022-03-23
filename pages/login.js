import React,{useState, useContext} from "react";
import Style from "../styles/login.module.css";
import {RiEyeCloseLine,RiEyeLine} from "react-icons/ri"
// import { loginIn } from '../src/services/services';
import {setCookie} from 'nookies';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { AuthContext } from '../src/context/AuthContext';

// Sing in form with styled components

const Login = () => {

    const { singIn } = useContext(AuthContext);
    

    const [password, setPassword] = useState('');
    const [show,setShow] = useState(false);
    const [email, setEmail] = useState('');    

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        singIn({email, password});
    }
    //     const response = await fetch(process.env.NEXT_PUBLIC_API_URL2 + "/dye/api/loginIn", {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json',
    //                     'acceptCookies' : 'true'},
    //         body: JSON.stringify({
    //             email: email,
    //             password: password,
    //         })
    //     })
    //     const resp = await response.json();
    //     console.log(resp)
    //         setCookie(null, 'x-auth-token', resp, {
    //             maxAge: 30 * 24 * 60 * 60,
    //             path: '/',
    //         });
    //         router.push('/dashboard');
    // }

        // Create cookies with nookies
       

        // if (email != '' && password != '')  {
        //     console.log(email, password)
              
        //    if (token) {
          
        //        setCookie(undefined, 'nextauth.token', token[0].token, {
        //            maxAge: 60 * 60 * 60 * 60,
        //        });
      
            //    router.push('/dashboard');


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    return (
        
            <div className={Style.container}>
                  <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>Nagano Consultoria</title>
        <meta name="description" content="Nagano Consultoria é um site especializado em credito consignado, empréstimos imobilário, emprestimos com fgts
        , consultamos qualquer tipo de credito para que você solucione a sua vida financeira de maneira prática" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
                <form  className={Style.formulario} onSubmit={(e)=>handleSubmit(e)} >
                    <strong  className={Style.title}>Login</strong>
                    <label  className={Style.label}>
                    Email:
                    <input  className={Style.input} type="text" onChange={handleEmail} />
                    </label>
                    <label  className={Style.label}>
                    Password:
                    <input  className={Style.input} type={show ? "text":"password"} onChange={handlePassword} />
                    <div  className={Style.contEye} onClick={()=>setShow(!show)}>
                        {show 
                        ? <RiEyeLine size={20}/>
                        :<RiEyeCloseLine size={20}/>
                        }
                    </div>
                    </label>
                    <button   className={Style.button} type="send" >
                        Entar
                    </button >
                </form>
            </div>

        );
}

export default Login;