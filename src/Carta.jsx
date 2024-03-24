import React, { useEffect, useState } from "react";
import { Comidas } from "./carta.js";
import Navbar from "./Navbar.jsx";
import LogoQuatroccento from "./assets/LOGO-QUATTROCENTO.webp";
import CostillaCerdoBarcacoa from "./assets/CostillaCerdoBarcacoa.webp";

export default function Carta() {
  const [carta, setCarta] = useState([]);
  const [buscarCategoria, setBuscarCategoria] = useState([]);
  const [estadoBusqueda, setEstadoBusqueda] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCarta(Comidas);
    });
  }, []);

  const clickCategoria = (e) => {
    const categoria = e.target.value;
    const cartaCategoria = carta.filter((item) => item.categoria === categoria);
    setBuscarCategoria(cartaCategoria);
    setEstadoBusqueda(false);
  };

  return (
    <div className="h-full bg-slate-100">
      <div
        className="flex md:min-w-full lg:min-w-full xl:min-w-full  flex-col justify-center items-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(66,14,19,0.9808298319327731) 16%, rgba(67,67,70,0.7175245098039216) 52%, rgba(66,14,19,1) 75%)",
        }}
      >
        <img
          height="277px"
          width="300px"
          fetchpriority="high"
          src={LogoQuatroccento}
          alt="Logo del Restaurant"
        />
      </div>
      <Navbar clickCategoria={clickCategoria} />
      <div className="grid place-content-center mx-auto mt-2 sm:max-w-[350px] sm:grid-cols-1 gap-4 md:max-w-[750px] md:gap-4 md:grid-cols-3 lg:max-w-[1000px] lg:grid-cols-4 lg:gap-4 xl:max-w-[1250px] xl:grid-cols-6 xl:gap-4 2xl:max-w-[1650px] 2xl:grid-cols-7 2xl:gap-4">
        {estadoBusqueda
          ? Comidas.map((item) => (
              <div
                className="flex flex-col h-auto w-[300px] mr-4 my-3 justify-start bg-slate-300 rounded-lg hover:bg-[#420619] hover:scale-105 hover:text-white sm:w-[300px] md:w-auto"
                key={item.id}
              >
                <img
                  decoding="async"
                  height="200px"
                  width="300px"
                  className="rounded-t-lg"
                  src={CostillaCerdoBarcacoa}
                  alt={`Image de ${item.nombre}`}
                />
                <p className="text-lg xl:text-2xl font-bold text-center">
                  {item.nombre}{" "}
                </p>
                <p className="text-l text-center">
                  <small>{item.descripcion}</small>
                </p>
                <p className="text-xl font-semibold text-center ">
                  {item.precio}$
                </p>
              </div>
            ))
          : buscarCategoria.map((item) => (
              <div
                className="flex flex-col h-auto w-[300px] mr-4 my-3 justify-start bg-slate-300 rounded-lg hover:bg-[#420619] hover:scale-105 hover:text-white sm:w-[300px] md:w-auto"
                key={item.id}
              >
                <div className="flex w-full justify-center">
                  <img
                    decoding="async"
                    height="200px"
                    width="300px"
                    className="rounded-t-lg"
                    src={CostillaCerdoBarcacoa}
                    alt={`Image de ${item.nombre}`}
                  />
                </div>
                <p className="text-lg xl:text-2xl font-bold text-center">
                  {item.nombre}{" "}
                </p>
                <p className="text-l text-center">
                  <small>{item.descripcion}</small>
                </p>
                <p className="text-xl font-semibold text-center ">
                  {item.precio}$
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
