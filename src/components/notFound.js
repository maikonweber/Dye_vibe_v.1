import {
    Box,
    Text,
    Flex,
} from '@chakra-ui/core';

import Link from 'next/link';

export const notFound = () => {
    return (
        <Flex 
        direction='column'
        h='100vh'
        w='90vw'
        margin={6}
        padding={5}
        alignItems='center'
        justifyContent='center'
        >
       <Box
         bg='white' 
            minWidth={480}
            maxWidth={480}
            borderRadius={6}
            shadow='md'
            rounded='lg'
            p={5}
            >
            <Text fontSize={'2xl'}>
                404
            </Text>
            <Text fontSize={'lg'}>
                Página não encontrada
            </Text>
            <Text fontSize={'lg'}>
                <Link href='/'>
                    Voltar para o início
                </Link>
            </Text>
        </Box>
        </Flex>
    )

}

module.exports = notFound;