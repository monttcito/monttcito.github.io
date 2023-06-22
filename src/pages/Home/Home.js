import React from "react";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
  FaFileDownload,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, ProfileButton } from "../../components";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  HomeBackground,
} from "../../assets";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container
      fluid
      className={styles.container}
      style={{ background: `url(${HomeBackground})` }}
    >
      <Row>
        <ImageHolder
          primarySource={ProfessionalHeadshot}
          secondarySource={FallbackProfessionalHeadshot}
          alt="Professional Headshot of Carlos Montoya Mansilla"
          className={styles.professionalHeadshot}
        />
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingOne}`}>
            Carlos Montoya Mansilla
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
            INGENIERO ELÉCTRICO
          </span>
        </Col>
      </Row>
      <Row>
        {/* <Col>
          <a href="https://www.linkedin.com/in/carlosmontoyam/" target="_blank_">
          <FaLinkedin className={styles.icon} />
          </a>
        </Col> */}
        {/* <Col>
          <a
            href="https://www.instagram.com/montt0202/"
            target="_blank_"
          >
            <FaInstagramSquare className={styles.icon} />
          </a>
        </Col> */}
      </Row>
      <Row>
        <Col>
          <ProfileButton
            logo={<FaLinkedin className={styles.iconSmall} />}
            href="https://www.linkedin.com/in/carlosmontoyam/"
          >
            Linkedin
          </ProfileButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileButton
            logo={<FaFileDownload className={styles.iconSmall} />}
            href="./resume.html"
          >
            Curriculum Vitae
          </ProfileButton>
        </Col>
      </Row>
      {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfileCard logo={CICSLogo} logoAlt="University of Massachusetts Amherst"> Undergraduate Course Assistant at Manning CICS </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Tech + Design Member at HackUMass Organizing Team </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Software Developer at HackUMass Organizing Team </ProfileCard>
            </Row> */}
    </Container>
  );
};

export default Home;
