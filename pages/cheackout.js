import React, {useContext, useState, useEffect} from 'react';
import { Flex, Input, Button, Stack, FormLabel, FormControl, Divider ,Box , Grid, Image, Td, Thead, Tbody, Tr, Tfoot, Th , Table, GridItem} from '@chakra-ui/react'
import { AuthContext } from '../src/context/AuthContext';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Select } from '@chakra-ui/react'
import { useMercadopago } from 'react-sdk-mercadopago/lib';


export const Cheackout = () => {
const [tabIndex , setTabIndex] = useState(0)
const [tabDisable , setTabDisable] = useState(true)
const [tabDisable2 , setTabDisable2] = useState(true)
const [tabDisable3 , setTabDisable3] = useState(true)
const [tabDisable4 , setTabDisable4] = useState(true)

const [user , setUser] = useState({
    
})

const [address , setAddress] = useState({
})

// useContext
const {cart, handleAddtoCart, handleRemoveItemFromCart, clearCart} = useContext(AuthContext);

const handleChange = (e) => {
    setTabIndex(e.target.value)
}

const mercadopago =  useMercadopago.v1('');


    return (
        <>
  <Grid  h='200px'
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(3, 3fr)'
  gap={4} h='100vh'>
  <GridItem rowSpan={3} colSpan={3} >
  <Tabs defaultIndex={0} index= {tabIndex} size='lg' align="center" variant='solid-rounded' colorScheme="facebook" isLazy margin={8} >
  <TabList>
    <Tab id="1" > Produtos </Tab>
    <Tab id="2" isDisabled={tabDisable} > Nome </Tab>
    <Tab id="3" isDisabled={tabDisable2} > Endereço </Tab>
    <Tab id="4" isDisabled={tabDisable3} > Pagamento </Tab>
    <Tab id="5" isDisabled={tabDisable4} > Confirmação </Tab>
  </TabList>
  
  <TabPanels aria-labelledby='1' >
    <TabPanel>
    <Box bg='white' minWidth={480} maxWidth={480} borderRadius={6} shadow='md' rounded='lg'>
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
            <Td><Image src={item.img} alt={item.name} minHeight={160} maxWidth={120} maxHeight={180} minWidth={120} borderRadius={8}/></Td>
            <Td>R${item.valor}</Td>
            <Td><Button w={20} color={'red'} bg='white' onClick={() => clearCart()}> Remover </Button></Td>
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
    <Box p={2}>
    <Button onClick={() => clearCart()}>Limpar Carrinho</Button>
    <Button onClick={() => {
        setTabDisable(false)
        handleChange({target: {value: 1}})
    }} marginLeft={'12%'}> Finalizar </Button>
    </Box>
    </Box>     

</Box>
    </TabPanel>
    <TabPanel>
    <Box bg='white' minWidth={480} maxWidth={480} borderRadius={6} shadow='md' rounded='lg'>
    <Box p={5}>
    <FormControl>
    <FormLabel  htmlFor="name">Nome</FormLabel>
    <Input marginBottom={3}   id="name" placeholder="Nome" />
    <FormLabel  htmlFor="name">Sobrenome</FormLabel>
    <Input marginBottom={3}  id="sobrenome" placeholder="Sobrenome" />
    <FormLabel   htmlFor="name">CPF</FormLabel>
    <Input  marginBottom={3}  id="cpf" placeholder="CPF" />
    <FormLabel htmlFor="name">Telefone</FormLabel>
    <Input marginBottom={3}  id="tel" placeholder="Telefone" />
    <FormLabel htmlFor="name">Email</FormLabel>
    <Input marginBottom={3}  id="email" placeholder="Email" />
    </FormControl>
    <Button onClick={() => {
        setTabDisable2(true)
        handleChange({target: {value: 1}})
    }}> Voltar </Button>
    <Button onClick={() => {
        setTabDisable3(false)
        handleChange({target: {value: 2}})
    }} marginLeft={'12%'}> Finalizar </Button>
    </Box>
    </Box>
    </TabPanel>
    <TabPanel>
    <Box bg='white' minWidth={480} maxWidth={480} borderRadius={6} shadow='md' rounded='lg'>
    <Box p={5}>
    <FormControl isRequired>
    <FormLabel  htmlFor="name">Endereço</FormLabel>
    <Input marginBottom={3}   id="end" placeholder="Endereço" />
    <FormLabel  htmlFor="name">Número</FormLabel>
    <Input marginBottom={3}  id="number" placeholder="Número" />
    <FormLabel   htmlFor="name">Complemento</FormLabel>
    <Input  marginBottom={3}  id="complemento" placeholder="Complemento" />
    <FormLabel  htmlFor="name">Bairro</FormLabel>
    <Input marginBottom={3}   id="bairro" placeholder="Bairro" />
    <FormLabel htmlFor="name">Cidade</FormLabel>
    <Input   id="city" placeholder="Cidade" />
    <FormLabel  htmlFor="name">Estado</FormLabel>
    <Input  marginBottom={3}  id="state" placeholder="Estado" />
    <FormLabel  htmlFor="name">CEP</FormLabel>
    <Input marginBottom={3}  id="cep" placeholder="CEP" />

    </FormControl>
    <Button onClick={() => {
        setTabDisable(true)
        handleChange({target: {value: 0}})

    }}> Voltar </Button>
    <Button onClick={() => {
        setTabDisable2(false)
        handleChange({target: {value: 3}})
    }} marginLeft={'12%'}> Finalizar </Button>

    </Box>
    </Box>
    </TabPanel>
    <TabPanel>
    <Box bg='white' minWidth={480} maxWidth={480} borderRadius={6} shadow='md' rounded='lg'>
    <Box p={5}>
    <FormControl>
    <FormLabel  htmlFor="name">Forma de Pagamento</FormLabel>
    <Select id='country' placeholder='Select country'>
    <option> Pix </option>
    <option> Cartão de Credito </option>
    </Select>
    </FormControl>
    <Button onClick={() => {
        setTabDisable3(true)
        handleChange({target: {value: 2}})
    }}> Voltar </Button>
    <Button onClick={() => {
        setTabDisable4(false)
        handleChange({target: {value: 4}})
    }} marginLeft={'12%'}> Finalizar </Button>
    </Box>
    </Box>
    </TabPanel>
    <TabPanel>
    <Box bg='white' minWidth={480} maxWidth={480} borderRadius={6} shadow='md' rounded='lg'>
    <Box p={5}>
      </Box>  
    <Button onClick={() => {
        setTabDisable4(true)
        handleChange({target: {value: 3}})
    }}> Voltar </Button>
    <Button onClick={() => {
        setTabDisable5(false)
        handleChange({target: {value: 6}})
    }} marginLeft={'12%'}> Finalizar </Button>
    </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
</GridItem>
</Grid>  

            </>
       
    )


    

   
    }

export default Cheackout;