import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#79093a" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#79093a" }}
      onClick={onClick}
    />
  );
}


export default function Navbar({ clickCategoria }) {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="container w-[250px] text-sm mx-auto mt-4 sm:w-[400px] sm:text-sm md:w-[500px] md:text-base lg:w-[750px] lg:text-lg 2xl:w-[1200px] 2xl:text-xl ">

      <Slider {...settings} className="mt-2">
        <button
          onClick={clickCategoria}
          value={"entradas"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Entradas
        </button>
        <button
          onClick={clickCategoria}
          value={"pescado"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Pescado
        </button>
        <button
          onClick={clickCategoria}
          value={"carnes"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Carnes
        </button>
        <button
          onClick={clickCategoria}
          value={"aves"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Aves
        </button>
        <button
          onClick={clickCategoria}
          value={"cerdos"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Cerdos
        </button>
        <button
          onClick={clickCategoria}
          value={"pastas"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px2"
        >
          Pastas
        </button>
        <button
          onClick={clickCategoria}
          value={"contornos"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Contornos
        </button>
        <button
          onClick={clickCategoria}
          value={"ensaladas"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Ensaladas
        </button>
        <button
          onClick={clickCategoria}
          value={"recomendado-chef"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Sugerencia de Nuestro Chef
        </button>
        <button
          onClick={clickCategoria}
          value={"vinos-tintos"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          VinosTintos
        </button>
        <button
          onClick={clickCategoria}
          value={"vinos-blancos"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Vinos Blancos
        </button>
        <button
          onClick={clickCategoria}
          value={"champagne"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Champagne
        </button>
        <button
          onClick={clickCategoria}
          value={"bebidas con alcohol"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Bebidas con alcohol
        </button>
        <button
          onClick={clickCategoria}
          value={"bebidas sin alcohol"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Bebidas sin alcohol
        </button>
        <button
          onClick={clickCategoria}
          value={"aperitivos"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Aperitivos
        </button>
        <button
          onClick={clickCategoria}
          value={"postres"}
          className="bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white my-4 mx-2 px-2"
        >
          Postres
        </button>
      </Slider>
    </div>
  );
}
