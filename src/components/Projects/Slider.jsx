import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/dkpvcnel8/image/upload/v1688117885/magososchool_pibd03.png",
        link:"https://magoso.org/",
        disc : "In 1999, in Kibera slum, a district in Nairobi, the capital of Kenya, Lillian established a school by gathering orphans in one room of her house."
    },
    {
        img : "https://res.cloudinary.com/dkpvcnel8/image/upload/v1688117946/Screenshot_qkmakw.png",
        link:"https://mislconsultancy.com/",
        disc : "MISL seeks to strengthen the links between policy practice and good governance, policy dialogue and development outcomes"
    },
    {
        img : "https://res.cloudinary.com/dkpvcnel8/image/upload/v1688117883/nesco_qlkobq.png",
        link:"https://nescobar.com/",
        disc : "Nesco is a young talent boy from kibra , Nairobi with alot of ambitions. Get to know him more by following him on different social media platforms. "
    },
    {
        img : "https://res.cloudinary.com/dkpvcnel8/image/upload/v1688117881/blackeyed_mtdbvr.png",
        link:"https://adembasharon.github.io/black-eyed-peas/",
        disc : "is an American musical group consisting of rappers will.i.am, apl.de.ap and Taboo."
    },
    {
        img : "https://res.cloudinary.com/dkpvcnel8/image/upload/v1688117879/palindrome_bm6pix.png",
        link:"https://adembasharon.github.io/palindrome-checker/",
        disc : "World's simplest browser-based utility for checking if text is a palindrome. Load your text in the input form on the left and it'll instantly get tested"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    // background-color: rgba(255, 255, 255, 0.100);
    background-color:white;
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`