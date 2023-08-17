import React from "react";
import BootstrapCard from "react-bootstrap/Card";
import Tag from "./Tags"; 

function DogCard({ name, image, description, tagText, tagColor }) {
  /* ver video para ver como se tabula mas rapido esto */
  return (
    <BootstrapCard style={{ width: "18rem" }}>
      {/* tamaño */}
      <BootstrapCard.Img variant="top" src={image} />
      {/* lugar y que */}
      <BootstrapCard.Body>
        <BootstrapCard.Title>{name}</BootstrapCard.Title>
        {/* que va en el titulo */}
        <BootstrapCard.Text>{description}</BootstrapCard.Text>
        {/* que va en el campo texto */}
        <Tag text={tagText} color={tagColor} />
        {/* ocupando tag */}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default DogCard;
