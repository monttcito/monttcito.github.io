import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, ExperienceCard } from "../../components";
import involvementsData from "../../data/Involvements.json";
import styles from "./Involvements.module.css";

const Involvements = () => {
  return (
    <React.Fragment>
      <Header title="Experiencia" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {involvementsData.map((obj, index) => (
            <ExperienceCard
              key={index}
              title={obj.title}
              organization={obj.organization}
              liveUrl={obj.liveUrl}
              duration={obj.duration}
              description={obj.description}
              logo={obj.logo}
              variant="danger"
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Involvements;
