import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import aiml from "../assets/img/OIP.jpg";
import attendance from "../assets/img/weba.png";
import django from "../assets/img/DJANGO.png";
import nxn from "../assets/img/nxn.png";
import flutter from "../assets/img/develop.png";


import nasa from "../assets/img/nasa.png";
import ml_cer from "../assets/img/ml certi.png";
import sf from "../assets/img/sf intern.png";
import ibm from "../assets/img/ibm.png";
import django_cert from "../assets/img/django_cert.png";
import flutte from "../assets/img/fluterr cer.png";






import ml from "../assets/img/ml.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Gesture-Controlled Color Removal with OpenCV",
      description: "I developed a Python project using OpenCV for real-time color removal, controlled by hand gestures. Ideal for creative visual content manipulation and interactive experiences.",
      imgUrl: aiml,
    },
    {
      title: "Face Recognition Attendence System",
      description: "Using library of openCV, A model of face recognition attendence system was designed on python",
      imgUrl: attendance,
    },
    {
      title: "NxN Queen Game",
      description: "Developed NxN queen game as a course project of artificial intelligence using backtracking algorithm",
      imgUrl: nxn,
    },
    {
      title: "Django Webpage",
      description: "chine Learning models deployed to webpage using django as backend and frontend was developed using HTML and CSS",
      imgUrl: django,
    },
    {
      title: "Obesity-Predictor",
      description: "Obesity-predictor utilizes the Obesity dataset to detect and classify various levels of obesity using machine learning algorithms.",
      imgUrl: ml,
    },
    {
      title: "Prison Management Systems",
      description: "ecently developed desktop application for Prison Management system using flutter and MySql. This project perform all CRUD operations in MySql",
      imgUrl: flutter,
    },
  ];







  const certificate = [
    {
      title: "Machine Learning Specialization",
      description: "Machine Learning by Stanford University & DeepLearning.AI on Coursera",
      imgUrl: ml_cer,
    },
    {
      title: "Django Web Framework",
      description: "COURSERA AUTHORIZED BY META\n https://www.coursera.org/account/accomplishments/verify/R3QB9RU35LSY",
      imgUrl: django_cert,
    },
    {
      title: "Software Intern",
      description: "Hackerrank",
      imgUrl: sf,
    },
    {
      title: "Flutter Developmenr",
      description: "an online non-credit project authorized by Google Cloud and offered through Coursera",
      imgUrl: flutte,
    },
    {
      title: "IBM Applied AI",
      description: "Completed APPLIED AI from Coursera. IBM APPLIED AI is a professional certification consists of 6 subcourse",
      imgUrl: ibm,
    },
    {
      title: "Galatic Problem Solver",
      description: "Participated in competition organized by NASA where we developed mobile application for the given task, it was about EMIT awareness application",
      imgUrl: nasa,
    },
  
  ];
 
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and Certificates</h2>
                <p>The project involves a comprehensive solution where the frontend and backend are built using different technologies, each excelling in its domain. The frontend is developed using Flutter, a versatile UI toolkit that allows for the creation of visually appealing and responsive applications across multiple platforms from a single codebase. This ensures a consistent user experience on both Android and iOS devices. On the backend, Django, a high-level Python web framework, is employed to manage server-side logic, secure user authentication, and database interactions. Django's robust architecture supports the creation of RESTful APIs, which seamlessly integrate with the Flutter frontend, enabling smooth data exchange and real-time updates. Additionally, the project incorporates machine learning algorithms, leveraging Python's extensive libraries such as TensorFlow or scikit-learn. These algorithms are used to analyze user data and deliver personalized insights and features. This integration showcases how the strengths of Flutter in UI/UX design and Django in backend management can be harmoniously combined with machine learning to create a sophisticated and efficient mobile application.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Contact Me</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                      <Row>
                        {
                          certificate.map((certificate, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                     <p>Personal Email: hasnainn34@gmail.com</p>
                     <p>Cloud Email: Naqvi4408094@cloud.neduet.edu.pk</p>
                     <p>Contact Number: 0335-9553593</p>                                                    
                    </Tab.Pane>
                  </Tab.Content>


                  
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
