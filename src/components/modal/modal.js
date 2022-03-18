// import React from 'react';
import Styles from './modal.module.css'
import { toast, useToast } from '@chakra-ui/react'


const ProductModal = ({Open ,setModal, product, description, img, quantidade, valor}) => {
  const toast = useToast()
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    const clooseModel = () => {
        setModal(!true)
    }

    const addToCart = () => {
      // Save the product, description, img, quantidade, valor
      // in localStorage
      const cart = localStorage.getItem('cart')
      const cartObj = JSON.parse(cart)
      if(cartObj === null){
        const newProduct = {
          product,
          description,
          img,
          quantidade,
          valor
        }
        const newCart = [newProduct]
        localStorage.setItem('cart', JSON.stringify(newCart))
        toast({
          title: 'Produto adicionado ao carrinho',
          description: 'O produto foi adicionado ao carrinho com sucesso',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }else{
        const newProduct = {
          product,
          description,
          img,
          quantidade,
          valor
        }
        cartObj.push(newProduct)
        localStorage.setItem('cart', JSON.stringify(cartObj))
        toast({
          title: 'Produto adicionado ao carrinho',
          description: 'O produto foi adicionado ao carrinho com sucesso',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
      setModal(!true)
    }
    

    return (
      <>
        <div className={Styles.modal}>
            <div className={Styles.modal_content}>

            
                <div className={Styles.modal_header}>
                
                    <div className={Styles.modal_header_title}>
                        <h2>{product}</h2>
                    </div>
                </div>
                <div className={Styles.modal_body}>
                
                <div className={Styles.modal_body_image}>
                        <img src={img} alt=""/>
                      </div>
                      <div className={Styles.description}>{description}</div>
                        <div className={Styles.quantidade}>{`Quantidade : ${quantidade}`}</div>
                        <div className={Styles.valor}>{valor}</div>
                      <button className={Styles.btn}
                        onClick={() => addToCart()}
                        
                            >
                         Add to cart</button>
                         <button className={Styles.btn} onClick={clooseModel}> Cancelar </button>
                      </div>
                      </div>
                      </div>
                    
    </>
    )   
}


export default ProductModal