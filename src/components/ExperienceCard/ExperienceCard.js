import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import styles from "./ExperienceCard.module.css";

const assets = {
  "sigma": (
    <ImageHolder
      primarySource={Asset.sigma}
      secondarySource={Asset.Fallbacksigma}
      alt="sigma"
      className={`card-img ${styles.image}`}
    />
  ),
  "eecol": (
    <ImageHolder
      primarySource={Asset.eecol}
      secondarySource={Asset.Fallbackeecol}
      alt="Eecol Electric"
      className={`card-img ${styles.image}`}
    />
  ),
  "proimel": (
    <ImageHolder
      primarySource={Asset.proimel}
      secondarySource={Asset.Fallbackproimel}
      alt="Proimel"
      className={`card-img ${styles.image}`}
    />
  ),
  "labo": (
    <ImageHolder
      primarySource={Asset.labo}
      secondarySource={Asset.Fallbacklabo}
      alt="labo"
      className={`card-img ${styles.image}`}
    />
  ),
  "aislacion": (
    <ImageHolder
      primarySource={Asset.aislacion}
      secondarySource={Asset.Fallbackaislacion}
      alt="aislacion"
      className={`card-img ${styles.image}`}
    />
  ),
  "contacto": (
    <ImageHolder
      primarySource={Asset.contacto}
      secondarySource={Asset.Fallbackcontacto}
      alt="contacto"
      className={`card-img ${styles.image}`}
    />
  ),
  "cpc100": (
    <ImageHolder
      primarySource={Asset.cpc100}
      secondarySource={Asset.Fallbackcpc100}
      alt="cpc100"
      className={`card-img ${styles.image}`}
    />
  ),
  "devanado": (
    <ImageHolder
      primarySource={Asset.devanado}
      secondarySource={Asset.Fallbackdevanado}
      alt="devanado"
      className={`card-img ${styles.image}`}
    />
  ),
  "hipot": (
    <ImageHolder
      primarySource={Asset.hipot}
      secondarySource={Asset.Fallbackhipot}
      alt="hipot"
      className={`card-img ${styles.image}`}
    />
  ),
  "inyeccion": (
    <ImageHolder
      primarySource={Asset.inyeccion}
      secondarySource={Asset.Fallbackinyeccion}
      alt="inyeccion"
      className={`card-img ${styles.image}`}
    />
  ),
  "isa": (
    <ImageHolder
      primarySource={Asset.isa}
      secondarySource={Asset.Fallbackisa}
      alt="isa"
      className={`card-img ${styles.image}`}
    />
  ),
  "seu": (
    <ImageHolder
      primarySource={Asset.seu}
      secondarySource={Asset.Fallbackseu}
      alt="paso"
      className={`card-img ${styles.image}`}
    />
  ),
  "correa": (
    <ImageHolder
      primarySource={Asset.correa}
      secondarySource={Asset.Fallbackcorrea}
      alt="correa"
      className={`card-img ${styles.image}`}
    />
  ),
  "swg": (
    <ImageHolder
      primarySource={Asset.swg}
      secondarySource={Asset.Fallbackswg}
      alt="swg"
      className={`card-img ${styles.image}`}
    />
  ),
  "tc": (
    <ImageHolder
      primarySource={Asset.tc}
      secondarySource={Asset.Fallbacktc}
      alt="tc"
      className={`card-img ${styles.image}`}
    />
  ),
  "trafo": (
    <ImageHolder
      primarySource={Asset.trafo}
      secondarySource={Asset.Fallbacktrafo}
      alt="trafo"
      className={`card-img ${styles.image}`}
    />
  ),
  "vlf": (
    <ImageHolder
      primarySource={Asset.vlf}
      secondarySource={Asset.Fallbackvlf}
      alt="vlf"
      className={`card-img ${styles.image}`}
    />
  ),
  "chancado": (
    <ImageHolder
      primarySource={Asset.chancado}
      secondarySource={Asset.Fallbackchancado}
      alt="chancado"
      className={`card-img ${styles.image}`}
    />
  ),
  "salaelectrica": (
    <ImageHolder
      primarySource={Asset.salaelectrica}
      secondarySource={Asset.Fallbacksalaelectrica}
      alt="salaelectrica"
      className={`card-img ${styles.image}`}
    />
  ),
};

const ExperienceCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);

  return (
    <Card className={styles.container}>
      {assets[props.logo]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.organization}
          <br />
          <span style={{ fontWeight: "500" }}>{props.duration}</span>
        </Card.Text>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant={props.variant}
            href={props.liveUrl}
            target="_blank"
          >
            Sitio WEB
          </Button>
        ) : null}
        {props.description ? (
          <React.Fragment>
            <Button
              className={styles.button}
              variant="secondary"
              onClick={handleModalOpen}
            >
              Descripción
            </Button>
            <Modal
              centered
              size="lg"
              show={modalDisplay}
              onHide={handleModalClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>{props.organization}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ textAlign: "center" }}>
                  <h4>{props.title}</h4>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h5>{props.duration}</h5>
                </div>
                <ul>
                  {props.description.map((elem) => (
                    <li>{elem}</li>
                  ))}
                </ul>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
