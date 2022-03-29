import React, {useContext, useState, useEffect} from 'react';
import {
    Grid, 
    GridItem,
    Flex,
    Input,
    Button,
    Stack,
    FormLabel,
    FormControl,
    Divider,
    Tab,
    Tabs,
    TabList,
    TabPanels,
    Box,
    Img, 
    Text
} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import { parseCookies, setCookie} from 'nookies';
import { AuthContext } from '../src/context/AuthContext';
import { useRouter } from 'next/router';



export const adminPage = (props) => {
  console.log(props)

    return (
        <>
        <Grid 
  margin={6}
  padding={5}
  templateRows={['repeat(12, 1fr)', 'repeat(18, 1fr)', 'repeat(12, 1fr)'] }
  templateColumns='repeat(12, 1fr)'
  gap={4}
  h={['100vh', '180vh', '150vh', '100vh']}
  w={['100vw', '90vw', '90vw', '95vw']}>
  <GridItem rowStart={[1, 1, 1, 1]} rowEnd={[4, 4, 3, 4]} colStart={[1, 2, 1, 1]} colEnd={[13, 12, 4, 3]} bgGradient={'linear(to-l, red.200, green.300)'} borderRadius={50} >
      <Flex 
      direction='column'
      justify='center'
      align='center'

      >
      <Box 
      bg="yellow"
      minWidth="120px"
      minHigth="120px"
      h="140px"
      w="140px"
      position="relative"
      positionX="center"
      borderRadius="50%"
      positionY="center"
      top={7}
      zIndex={99}
      >
        <Img src="https://bit.ly/dan-abramov" borderRadius={'50%'} w='100%' vh="100%" alt="avatar" /> 
      </Box>
      </Flex>
  </GridItem >
  <GridItem rowStart={[4, 4, 1, 1]} rowEnd={[10, 7, 4, 6]} colStart={[1, 1, 4, 3]} colEnd={[13, 13, 13, 13]} bgGradient={'linear(to-l, red.300, green.400)'} borderRadius={50}>
      <Flex
      direction='column'
      justify='center'
      align='center'
      >
        <Box 
        bgGradient="linear-gradient(to right, red.100 20%, blue.100 100%)"
        borderRadius={10}
        margin={10}
        marginLeft={5}
        marginRight={5}
        minWidth="120px"
        minHigth="120px"
        h="95%"
        w="95%"

        >
      <Table size='sm'>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td isNumeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td isNumeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>
</Box>     
</Flex>
    </GridItem>

  <GridItem rowStart={[6, 7, 4, 6]} rowEnd={[15, 10, 8, 13]} colStart={[1, 1, 4, 3]} colEnd={[13, 13, 13, 8]} bgGradient={'linear(to-l, red.400, green.400)'} borderRadius={50} />
  <GridItem rowStart={[6, 10, 8, 6]} rowEnd={[13, 14, 12, 13]} colStart={[7, 1, 4, 3, 8]} colEnd={[13, 13, 13, 13]} bgGradient={'linear(to-l, red.500, green.400)'} borderRadius={50}/>
  <GridItem rowStart={[12, 14, 3, 4]} rowEnd={[12, 18, 8, 13]} colStart={[1, 1, 1, 1]} colEnd={[12, 13, 4, 3]} bgGradient={'linear(to-l, red.600, green.400)'} borderRadius={50} />
</Grid>
        </>
    )
    
}

export const getServerSideProps = async (ctx) => {
  const token = (ctx.req.cookies['x-auth-adm'])
  const cookies = ctx.req.cookies
  // if token undefined redirect to login
  if(!token){
    return ctx.res.writeHead(301, {
      Location: '/login'
    })
  }
  // if token defined get user data
  else{
    

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/v2/listSales', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'acceptcookies': true,
          'x-auth-token': token
      }
  });

  // const response_ = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/v2/getRecordSale', {
  //     method: 'GET',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'acceptcookies': true,
  //         'x-auth-token': token
  //     }
  // // });

  const resp =  await response.json();
  // const resp_ =  await response_.json();

  return {
      props: {
       sales : resp
      },
  }
}
}


export default adminPage;






