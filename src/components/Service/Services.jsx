import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"ui/ux designer"}
            disc={`As a UI/UX developer, I specialize in crafting intuitive and visually stunning interfaces, ensuring seamless user experiences by incorporating modern design principles and leveraging advanced technologies.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"APP Developer"}
            disc={`As a React Native app developer, I leverage the power of this cross-platform framework to create dynamic and engaging mobile applications, delivering native-like experiences across iOS and Android devices with efficiency and scalability.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"web designer"}
            disc={`As a web designer, I utilize tools like Figma and other applications to create visually stunning and user-friendly websites. I specialize in crafting engaging layouts, intuitive navigation, and seamless interactions to enhance the overall user experience.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 70%;
    font-size:1rem;
  }

  h1 {
    padding-top: .7rem;
    font-size:1.7rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  
`;
