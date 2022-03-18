import React, {useContext, useState, useEffect} from 'react';
import { Flex, Input, Button, Stack, FormLabel, FormControl, Divider ,Box , Grid, Image, Td, Thead, Tbody, Tr, Tfoot, Th , Table} from '@chakra-ui/react'
import { AuthContext } from '../src/context/AuthContext';


export const Cheackout = () => {


// useContext
const {cart, handleAddtoCart, handleRemoveItemFromCart, clearCart} = useContext(AuthContext);
console.log(cart)




    return (
        <>
            <Flex align='start' justify='center' position='relative' top={0} h='100vh'>
                <Box bg='white' minWidth={480} maxWidth={800} borderRadius={6} shadow='md' rounded='lg'>
                <Table size='md' colorScheme={'green'}>
  <Thead>
    <Tr>
      <Th>Product</Th>
      <Th> Valor </Th>
      <Th >Retirar</Th>
    </Tr>
  </Thead>
  <Tbody>
      {
    cart.map((item, index) => (
        <Tr key={index}>
            <Td><Image src={item.img} alt={item.name} minHeight={160} maxWidth={150} maxHeight={180} minWidth={120} borderRadius={8}/></Td>
            <Td>R${item.valor}</Td>
            <Td><Button w={20} color={'red'} bg='white' onClick={clearCart}> Remover </Button></Td>
        </Tr>
    ))
}
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>
<Box >
    <Box p={5}>
    <Button onClick={clearCart}>Limpar Carrinho</Button>
    <Button onClick={clearCart} marginLeft={'45%'}> Finalizar </Button>
    
    </Box>
    </Box>     

</Box>

</Flex>  

            </>
       
    )


    

   
    }

export default Cheackout;