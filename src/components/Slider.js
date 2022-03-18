
import styled from 'styled-components'
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    overflow: hidden;
    postion: relative;
    object-position: center;
    border-radius: 20px;
`

const Arrow = styled.div`
    width:  50px;
    height: 50px;
    font-size: 70px;
    backgroud-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 240px;
    bottom: 650px;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction ==='right' && '10px'};
    margin: auto;
    cursor: pointer;
    color: #fff;

    @media screen and (max-width: 768px) {
        top: 120px;
    }

    @media screen and (max-width: 1080px) {
        top: 232px;


    @media screen and (max-width: 485px) {
        top: 120px;
    }

    @media screen and (max-width: 685px) {
        top: 160px;
    }
    
    
    `


const Slide = styled.div`
   height: 700px;
   border-radius: 15px;
  
`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;    
    border-radius: 15px;

    `

const Image = styled.img `
    width: 1250px;
    height: auto;    
    border-radius: 15px;
    object-fit: cover;  
    object-position: 50% 60%;
    `
export function  Slider({sliderItems}) {
    const [current, setCurrent] = useState(0);

    const length = sliderItems.length;

    if (!Array.isArray(sliderItems) || sliderItems.length === 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);

    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }
    

    return (
        <Container>
            <Arrow direction='right' onClick={() => nextSlide()}>
            <AiOutlineRight />
            </Arrow>
            {sliderItems.map((item, index) => {
                    return (
            <Slide>
            
            <ImageContainer key={index}>
                {index === current && (
                <Image src={item.img} ></Image>
                )}
                </ImageContainer>
                   
            </Slide>  
             )})} 
            <Arrow direction='left' onClick={() => prevSlide()} >
            <AiOutlineLeft />
            </Arrow>
        </Container>
    )
}

export default Slider;