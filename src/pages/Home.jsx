import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Mapa from "./Mapa.jsx";
import Form from "../components/formulario/Form.jsx";
import logo from "../assets/quattroccento-restaurant-logo.webp";
import restaurant from "../assets/quattroccento-restaurant.webp";
import quattrocentoAbout from "../assets/quattrocento-about.webp";

export default function Home() {
  
  function scrollTo(e) {
    const searchScroll = e.target.name;
    const searchSection = document.getElementById(`${searchScroll}`);
    if (searchSection) {
      window.scrollTo({
        top: searchSection.offsetTop,
        behavior: "smooth",
      });
    }
  }

  const menuDesplegable = () => {
    console.warn("click");
    const menu = document.querySelector('#menu')
    menu.classList.toggle('hidden')
  };

  return (
    <div className="bg-stone-800">
      <nav className="container mx-auto pt-2 flex flex-wrap items-center justify-between">
        <div className="flex">
          <img src={logo} alt="Logo quattrocento" />
        </div>
        <div className="block ml-auto lg:hidden">
          <button onClick={menuDesplegable} className="text-white hover:bg-stone-900">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div id="menu" className="flex w-auto flex-col sm:flex-col md:flex-row lg:flex-row justify-evenly space-x-10 text-white">
          <h2 className="text-lg font-bold cursor-pointer hover:text-red-600">
            Restaurant
          </h2>
          <a
            name="about"
            className="text-lg font-bold transition-colors duration-300 cursor-pointer hover:text-red-600"
            onClick={scrollTo}
          >
            Acerca de
          </a>
          <a
            name="contacto"
            className="text-lg font-bold cursor-pointer hover:text-red-600"
            onClick={scrollTo}
          >
            Contacto
          </a>
          <Link
            to="/carta"
            className="text-lg font-bold cursor-pointer hover:text-red-600"
          >
            Nuestra Carta
          </Link>
        </div>
      </nav>

      <section>
        <div style={{ maskImage: "" }}>
          <img
            id="imagen-restaurant"
            src={restaurant}
            alt="Imagen del restaurant"
            className="opacity-70 hover:opacity-100 hover:saturate-150"
          />
          <div className=" py-10">
            <div className="container mx-auto flex flex-col w-[600px] justify-center">
              <h1 className="text-4xl text-center font-bold text-white pb-2">
                ♠ Quattrocento Restaurant ♠
              </h1>
              <p className="text-xl text-white text-center">
                "Desde 2010, en Quattrocento Restaurant hemos brindado un
                servicio de excelencia y calidad incomparable, deleitando a
                nuestros clientes con una amplia variedad de platos
                especializados que despiertan los sentidos con su exquisito
                sabor."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20" id="about">
        <h1 className="text-6xl text-center italic font-bold text-gray-100 py-8">
          ACERCA DE NOSOTROS
        </h1>
        <div className="flex justify-evenly items-center">
          <p className="w-[800px] text-base text-gray-100 font-sans text-start ">
            Desde su origen en 2010, <strong>Quattrocento</strong> ha sido un
            referente en la escena gastronómica, comprometido en brindar la
            mejor experiencia culinaria a nuestros comensales. Nuestra visión es
            simple pero ambiciosa: ser reconocidos como el destino culinario por
            excelencia, superando las expectativas de calidad y sabor en cada
            plato que servimos.
            <br />
            <strong className="text-xl">Cocina Gourmet Excepcional:</strong>
            <br />
            En <strong>Quattrocento</strong>, llevamos la experiencia culinaria
            a un nivel superior con una cocina gourmet que deleita los paladares
            más exigentes. Entre nuestros exquisitos platillos se encuentran:
            <br />
            <strong>Entraña:</strong> Jugosa y tierna, una delicia para los
            amantes de la carne.
            <br />
            <strong>Brochette de Lomo:</strong> Una explosión de sabores en cada
            bocado.
            <br />
            <strong>Cintas Negras con Frutos de Mar:</strong> Una fusión única
            de tierra y mar.
            <br />
            <strong>Lomo Strogonoff:</strong> Un clásico reinventado con nuestro
            toque especial. Y una variedad de platos más que reflejan la pasión
            y creatividad de nuestros chefs.
            <br />
            <strong className="text-xl">
              Experiencia y Servicio Inigualables:
            </strong>
            <br />
            Respaldados por un equipo de chefs de primera categoría, tres o
            cuatro mozos dedicados a brindar la mejor atención y una cajera
            siempre dispuesta a hacer que tu experiencia sea perfecta, en
            <strong> Quattrocento</strong> nos esforzamos por superar tus
            expectativas en cada visita.
            <br />
            <strong className="text-xl">Ambiente Renovado:</strong>
            <br />
            Recientemente remodelado, nuestro restaurante ha mejorado tanto su
            cocina como su barra de cajera. Además, hemos renovado la
            iluminación de nuestros salones para crear un ambiente acogedor y
            elegante donde disfrutar de una comida inolvidable.
            <br />
            <strong className="text-xl">Selección de Bebidas:</strong>
            <br />
            Complementa tu experiencia gastronómica con nuestra cuidadosa
            selección de vinos tintos y blancos, vinos espumantes y una amplia
            variedad de bebidas, tanto alcohólicas como sin alcohol, para
            satisfacer todos los gustos y ocasiones.
            <br />
            En <strong>Quattrocento</strong>, nos enorgullece ofrecer más que
            una simple comida; ofrecemos una experiencia culinaria memorable.
            Únete a nosotros y descubre por qué somos el destino preferido de
            los amantes de la buena comida y el excelente servicio.
          </p>
          <article className="py-16">
            <img
              src={quattrocentoAbout}
              className="rounded-lg saturate-150"
              alt="Quattrocento Reserva"
            />
          </article>
        </div>
      </section>

      <section className="pb-16 text-white" id="contacto">
        <h1 className="text-center text-6xl italic font-bold text-white mb-16">
          CONTACTO
        </h1>
        <div className="flex justify-evenly items-center">
          <Form />
          <Mapa />
        </div>
      </section>
    </div>
  );
}