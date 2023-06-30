import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal';
import { FaRegDotCircle } from "react-icons/fa";



var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {

  return (
    <Container id='client'>
        <Slide direction="left">
            <Tech>
            <span className="green">Technologies</span>
            </Tech>
        </Slide>
        <Testimonials>
            <div className='technologies'>
                            <Technologieslist>
                                <Dot>
                                    <div>
                                <FaRegDotCircle/>
                                </div>
                                <div>
            <h3>React</h3>
            </div>
            </Dot>


            <Dot>
                <div>
            <FaRegDotCircle/>
            </div>
            <div>
            <h3>Nodejs</h3>
            </div>
            </Dot>
            </Technologieslist>


            <Technologieslist>
            <Dot>
            <div>
            <FaRegDotCircle/>
            </div>
            <div>

            <h3>WordPress</h3>
            </div>
            </Dot>
            <Dot>
            <div>
            <FaRegDotCircle/>
            </div>
            <div>
            <h3>Nextjs</h3>
            </div>
            </Dot>
            </Technologieslist>


            <Technologieslist>
            <Dot>
            <div>
            <FaRegDotCircle/>
            </div>
            <div>
            <h3>React Native</h3>
            </div>
            </Dot>
            <Dot>
            <div>
            <FaRegDotCircle/>
            </div>
            <div>
            <h3>Bootstrap</h3>
            </div>
            </Dot>
            </Technologieslist>
            </div>

            </Testimonials>
           
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;


    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }


    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }
    .technologies{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`
const Tech=styled.div`
@media (max-width: 840px) {
   text-align: center;
font-size:1rem;
  }
  
  @media (max-width: 650px) {
   text-align:center;
   font-size:1rem;
  }
`
const Technologieslist=styled.div`  
  display: flex;
    flex-direction: column;
        gap:1em;
        alignItems:flex-start;
        @media (max-width: 840px) {
            display: flex;
            align-items: center;
            flex-direction: ,column;
            font-size:.5rem;
    
          }
          
          @media (max-width: 650px) {
            display: flex;
            align-items: center;
            flex-direction: column;
            align-items:center;
          }

      
        
`
const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
    @media (max-width: 840px) {
        display: flex;
        align-items: center;
        flex-direction: ,column;
        font-size:.5rem;

      }
      
      @media (max-width: 650px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        align-items:center;
      }
`
const Dot = styled.div`
display: flex;
flex-direction: row;
gap:.5em;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`