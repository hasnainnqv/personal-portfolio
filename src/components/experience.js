



import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Experience.css';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Experience = () => {
  const experiences = [
    {
      title: "Python Developer Intern",
      company: "Odes.pk",
      duration: "02/2024 - 05/2024",
      description: `Development and deployment of Python projects on AWS, finding bugs 
                    in deployed programs. Additionally, expanded knowledge while 
                    working on Raspberry Pi, building a solution for automated WiFi connection.`
    },
    {
      title: "ML Intern",
      company: "NCL-NED ESCV LAB",
      duration: "09/2023 - 10/2023",
      description: `Completed an ML internship focused on detecting retinopathy 
                    in collaboration with a funded project. Utilized deep learning models 
                    for detection and generated fake data using GANs.`
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <h1>My Journey</h1>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <h4>{exp.duration}</h4>
                <p>{exp.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
