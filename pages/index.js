import react, { useContext , useEffect, useState } from 'react'
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { Card } from "../src/components/card";
import { Slider } from '../src/components/slider';

import ProductModal  from '../src/components/modal/modal';
import{ sliderItems } from '../src/data';
import sliderCard from '../src/datax';
const datas = sliderCard;



export const Home = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
       setModalOpen(!false)
        
    }

    useEffect(() => {
        console.log(modalOpen)  
    }, [modalOpen])

    return (
        <>  
       
        <Flex direction='column' h='100vh' >
            <Flex  w='100%' my='6' h='50vh' maxWidth={1480} mx='auto' px='6' >
                <Slider sliderItems={sliderItems} />
                </Flex>
                <Flex w='100%' my='6' h='80vh' maxWidth={1480} mx='auto' px='6' > 
                <SimpleGrid w='100%' h='80vh' columns={[1, 1, 2, 3]} spacing={10} maxWidth={[300, 400, 1250, 1650]}>
                    {datas.map(item => (
                        <Card
                            key={item.id}
                            url={item.url}
                            product={item.product}
                            description={item.description}
                            valor={item.valor}
                            resume={item.resume}
                            quantidade={item.quantidade}
                            handleModal={handleModal}
                        />
                    ))}
                </SimpleGrid>
                </Flex>
            </Flex>
            
        
            </>
            )
}
export default Home
