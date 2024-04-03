import React from "react";
import Item from "./Item";
import LogoQuattrocento from "./assets/LOGO-BLANCO.webp";

export default function Footer() {
  const quattrocento_restaurant = [
    {
      id: 9,
      title: "Quattroccento Restaurant",
    },
    {
      id: 1,
      titulo: "El Mejor Restaurante de Catamarca",
    },
    {
      id: 2,
      titulo: "Menú especializado",
    },
    {
      id: 3,
      titulo: "Servicio de bar",
    },
  ];

  const direccion = [
    {
      id: 9,
      title: "Direccion",
    },
    {
      id: 5,
      titulo: "Avellaneda 400, San Fernando del Valle de Catamarca",
      url: "https://maps.app.goo.gl/sM8tjrKr3wPLiUgJ9"
    },
  ];

  const contacto = [
    {
      id: 10,
      title: "Contacto",
    },
    {
      id: 12,
      titulo: "Facebook",
      url: "https://www.facebook.com/QuattrocentoRistorante"
    },
    {
      id: 13,
      titulo: "Instagram",
      url: "https://www.instagram.com/quattrocento4/"
    },
  ];

  return (
    <footer className="bg-gray-800  text-white">
      <div className="grid place-content-center items-start h-auto mx-2 pt-10 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex items-center justify-center ">
          <img  className=" object-cover" src={LogoQuattrocento} alt="Footer Logo Quattrocento" />
        </div>
        <Item content={quattrocento_restaurant} />
        <Item content={direccion} />
        <Item content={contacto} />
      </div>
    </footer>
  );
}
