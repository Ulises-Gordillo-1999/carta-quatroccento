import React from "react";
import Item from "./Item";
import LogoQuattrocento from "./assets/LOGO-QUATTROCENTO.webp";

export default function Footer() {
  const quattrocento_restaurant = [
    {
      id: 9,
      title: "Quattroccento Restaurant",
    },
    {
      id: 1,
      titulo: "El Mejor Restaurante de la Ciudad de Catamarca",
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
    <footer className="bg-[#420619]  text-white">
      <div className="grid grid-cols-4 h-80 mx-2 pt-10 text-center">
        <div className="flex items-center justify-center ">
          <img height="250px" width="270px" className="h-[250px] w-[270px] object-cover" src={LogoQuattrocento} alt="Footer Logo Quattrocento" />
        </div>
        <Item content={quattrocento_restaurant} />
        <Item content={direccion} />
        <Item content={contacto} />
      </div>
    </footer>
  );
}