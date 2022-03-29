import { Box,
Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider({ sliderItems }) {
    console.log(sliderItems, "sliderItems")
    return (
        <Box w='100%' borderRadius={50} h='50vh' p={4} color='white.200' margin={1}
        marginLeft={5} >
            <Carousel autoPlay={true} infiniteLoop={true} number={250} >
                {sliderItems.map((item) => {
                   return  <Image borderRadius={20} boxShadow="inner" rounded={'md'} bg='white'  w='800px' h='50vh' src={item.url_img} alt={item.product_name} />;
                })}
            </Carousel>
        </Box>
    )
}   


