import React, { useEffect, useContext } from 'react';
import { Flex, Image, Input, Icon, Spacer, Button, useDisclosure } from '@chakra-ui/react'
import  {RiSearchLine} from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiOutlineShoppingCart } from 'react-icons/hi';
import { AuthContext } from '../context/AuthContext';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box, 
    Text,

  
  } from "@chakra-ui/react"


const logo = '../../public/logo192.png'

export const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
  
    const btnRef = React.useRef();

    // use Contenxt
    const {cart, handleAddtoCart, handleRemoveItemFromCart, clearCart, getCart, hadlesItemCartLength } = useContext(AuthContext);
    console.log(cart)

    useEffect(() => {
      getCart();



    }, [])
    

    return (
      
        <Flex as='header' bgGradient='linear(to-r, red.100, blue.200)' maxWith={1488} h='20' mx='auto' mt='0'px='8' align='center' w='100%'>
            <Image alignSelf='center' src='Logo.png' alt="Logo" objectFit="cover"
            boxSize='70px' />
             <Spacer w='70px' />
        <Flex
        as='label'
        flex='1'
        py='3'
        px='6'
        nl='6'
        maxWidth={280}
        alignSelf='Center'
        color='green.400'
        position='relative'
        bg='blue.100'
        borderRadius='full'
        >
           
            <Input color='blue.900'
            variant='unstyled'
            px='3'            
            mr='4'
            placeholder='Buscar por Itens'
            _placeholder={{color: 'blue.900'}}></Input>
            <Icon as={RiSearchLine} fontSize='20' color='blue.900' />
            
         </Flex>
         <Icon as={BsFillChatDotsFill} ml='6' fontSize='25' color='blue.900' onClick={console.log('her')} />
         <Icon as={HiOutlineShoppingCart} ml='6'fontSize='25' color='blue.900' onClick={onOpen} />
         <Icon as={GiHamburgerMenu} ml='6'
         fontSize='25' color="blue.900" onClick={console.log('aaa')}>
      </Icon>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}

      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> Carrinho de Compra. </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Procure pelo seu produto" />
            {cart.map((item, index ) => (
              <Box key={index} mt='2' w='270px' h='130px' > 
              <Image src={item.img} 
               borderRadius='full'
               boxSize='75px'>
              </Image>
              <Text fontSize='20px' mt='2' >{item.name}</Text>
              <Text fontSize='xs'>{item.product}</Text>
              <Text fontSize='xs'>{item.valor}</Text>
              <Button variantColor='red' onClick={() => handleRemoveItemFromCart(index) }> Remover </Button>

            </Box>
            
            ))}
          </DrawerBody>
         
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={() => clearCart() }>
              Cancelar tudo
            </Button>
            <Button colorScheme="blue"> Check In </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Flex>
    )
}
