import react, { useContext , useEffect, useState } from 'react'
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { Card } from "../src/components/card";
import  Slider from '../src/components/Slider';
import { getMainPage } from '../src/services/service';
import ProductModal  from '../src/components/modal/modal';
import{ sliderItems } from '../src/data';
import sliderCard from '../src/datax';




export const Home = ({product, carousel, markting }) => {
    console.log(product, carousel, markting)

    const [modalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState(product);
    const [filter, setFilter] = useState({
        filter : "Camisas",
        orderBy : "Preço",
        order: "Ascendente",
        page : 1
    });


    const handleModal = () => {
       setModalOpen(!false)
    }

            
 
    return (
        <>  
       
        <Flex direction='column' h='100vh' >
            <Flex  w='100%' my='6' h='50vh' maxWidth={1480} mx='auto' px='6' >
                <Slider sliderItems={carousel} />
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
                        />
                    ))}
                </SimpleGrid>
                </Flex>
            </Flex>
            
        
            </>
            )
}

export const getStaticProps = async () => {
    console.log('getStaticProps')
    const url = process.env.NEXT_PUBLIC_API_URL + `/api/productsFilter`
    const url1 = process.env.NEXT_PUBLIC_API_URL + `/api/seeCarousel`
    const url2 = process.env.NEXT_PUBLIC_API_URL + `/api/seeMarkting`

    var fter = {
        filter : null,
        orderBy : "Preço",
        order: "Ascendente",
        page : 1
    }
          
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
         'acceptcookies': 'true'},

             
        body: JSON.stringify({
            filter: fter.filter,
            orderBy: fter.orderB,
            order: fter.orderA,
            page: fter.page
        })
    })

    const response_ = await fetch(url1, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
         'acceptcookies': 'true'},
    })

    const response__ = await fetch(url2, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
            'acceptcookies': 'true'},
    })

    
    const data = await response.json();
    const data_ = await response_.json();
    const data__ = await response__.json();

    
 
    
    return {
        props: {
            product : data,
            carousel : data_,
            markting : data__
            },
        revalidate: 50
    }
}
export default Home
