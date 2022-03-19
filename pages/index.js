import react, { useContext , useEffect, useState } from 'react'
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { Card } from "../src/components/card";
import { Slider } from '../src/components/slider';
import { getMainPage } from '../src/services/service';
import ProductModal  from '../src/components/modal/modal';
import{ sliderItems } from '../src/data';
import sliderCard from '../src/datax';




export const Home = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({
        filter : "Camisas",
    orderB : "Preço",
        orderA: "Ascendente",
        page : 1
    });

    const handleModal = () => {
       setModalOpen(!false)
        
    }

    const intervalReload = () => {
        setInterval( async () => {
            const response = await getMainPage(filter.filter, filter.orderB, filter.orderA, filter.page);
            console.log(response, "response")
            setData(response);
        
        }, 15000);
    }
            

    useEffect(() => {
        intervalReload();

    }, [])  

    useEffect(() => {
        console.log(data, "data")
    }
    , [data])
  
    return (
        <>  
       
        <Flex direction='column' h='100vh' >
            <Flex  w='100%' my='6' h='50vh' maxWidth={1480} mx='auto' px='6' >
                <Slider sliderItems={sliderItems} />
                </Flex>
                <Flex w='100%' my='6' h='80vh' maxWidth={1480} mx='auto' px='6' > 
                <SimpleGrid w='100%' h='80vh' columns={[1, 1, 2, 3]} spacing={10} maxWidth={[300, 400, 1250, 1650]}>
                    {data.map(item => (
                        <Card
                            key={item.id}
                            url={item.url_img}
                            product={item.product_name}
                            valor={item.product_price}
                            resume={item.product_type}
                            quantidade={item.product_amout}
                            handleModal={handleModal}
                        />
                    ))}
                </SimpleGrid>np
                </Flex>
            </Flex>
            
        
            </>
            )
}
export default Home
