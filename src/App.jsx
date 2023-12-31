import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import DogCard from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import uno from "./assets/imgs/uno.jpg";
import dos from "./assets/imgs/dos.jpg";
import tres from "./assets/imgs/tres.jpg";
import cuatro from "./assets/imgs/cuatro.jpg";

function App() {
  const dogData = [
    {
      image: uno,
      name: "perros de carrera",
      description: "perros altamente capacitados para largas distancias",
      tagText: "Carrera",
      tagColor: "dark",
    },
    {
      image: dos,
      name: "perros de caza",
      description: "perros altamente capacitados para atacar motochorros",
      tagText: "Caza",
      tagColor: "danger",
    },
    {
      image: tres,
      name: "perros cieguitos",
      description: "perros adiestrados en el arte de guiar personas con discapacidad",
      tagText: "Ciego",
      tagColor: "info",
    },
    {
      image: cuatro,
      name: "perros de guerra",
      description: "perros entrenados militarmente para conducir tanques sovieticos",
      tagText: "Guerra",
      tagColor: "warning",
    },
  ];

  return (
    <>
      <Header title="Adopta un perrito" />

      <div className="container">
        <div className="row">
          {dogData.map((dog, index) => (
            <div className="col-md-3" key={index}>
              {/* vuelve el orden */}
              <DogCard
                image={dog.image}
                name={dog.name}
                description={dog.description}
                tagText={dog.tagText}
                tagColor={dog.tagColor}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer text="ASOCIACION DE PERROS S.A" />
    </>
  );
}

export default App;
