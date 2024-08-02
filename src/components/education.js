// import React from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import './education.css';
// import colorSharp2 from "../assets/img/color-sharp2.png";

// export const Education = () => {
//   const experiences = [
//     {
//       title: "Computer Information System Engineering",
//       company: "NED University of Science And Technology",
//       duration: "10/2021-present",
//       description: ``
//     },
//     {
//       title: "Intermediate",
//       company: "Delhi College",
//       duration: "08/2019-09/2021",
//       description: `PRE-ENGINEERING\n6th position in Karachi board`
//     }
//   ];

//   return (
//     <section className="education" id="education">
//       <Container>
//         <h1>Education</h1>
//         <Row>
//           {experiences.map((exp, index) => (
//             <Col key={index} xs={12} sm={6} md={4} lg={3}>
//               <div className="education-item">
//                 <h2>{exp.title}</h2>
//                 <h3>{exp.company}</h3>
//                 <h4>{exp.duration}</h4>
//                 <p>{exp.description}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       <img className="edu_background-image-right" src={colorSharp2} alt="Background" />
//     </section>
//   );
// };


import React from 'react';
import { Container } from "react-bootstrap";
import './education.css';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Education = () => {
  const experiences = [
    {
      title: "Computer Information System Engineering",
      company: "NED University of Science And Technology",
      duration: "10/2021-Present",
      description: ``
    },
    {
      title: "Intermediate",
      company: "Delhi College",
      duration: "08/2019-09/2021",
      description: `PRE-ENGINEERING\n6th position in Karachi board`
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <h1>Education</h1>
        <div className="education-container">
          {experiences.map((exp, index) => (
            <div key={index} className="education-item">
              <h2>{exp.title}</h2>
              <h3>{exp.company}</h3>
              <h4>{exp.duration}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </Container>
      <img className="edu_background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
