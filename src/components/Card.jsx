import React from "react";
import BootstrapCard from "react-bootstrap/Card";
import Tag from "./Tags"; 

function DogCard({ name, image, description, tagText, tagColor }) {
  return (
    <BootstrapCard style={{ width: "18rem" }}>
      <BootstrapCard.Img variant="top" src={image} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{name}</BootstrapCard.Title>
        <BootstrapCard.Text>{description}</BootstrapCard.Text>
        <Tag text={tagText} color={tagColor} />
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default DogCard;
