import React from 'react';
import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'


export const login = () => {
    return (
        <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
        
        <Flex as='form' width='100%' maxWidth={360} 
                bgGradient='linear(to-r,red.200, green.200)' p='8' borderRadius={8} flexDir='column'>
        <Stack spacing='4' />
        <FormControl>
        <FormLabel color='blue.600'  htmlFor="email">Email</FormLabel>
        <Input name='email' type='email' id='email' size='lg' focusBorderColor='green.900' _hover={{bgColor: 'gree.100'}}></Input>
       
        </FormControl> 
            
        <FormControl>
        <FormLabel color='blue.600' htmlFor="email">Senha</FormLabel>
        <Stack spacing='4' />
            <Input name='password' type='password' id='password' size='lg' focusBorderColor='green.900' _hover={{bgColor: 'gree.100'}}
            ></Input>
             </FormControl>
             <Stack spacing='4' />
            <Button type='submit' mt='6' bg='blue.300' color='red.900'> Entrar </Button>
        </Flex>
        </Flex>

    );
    }

    export default login;