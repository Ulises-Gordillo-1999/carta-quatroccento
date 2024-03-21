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
    }, );
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
        className="flex flex-col justify-center items-center"
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
      <div className="grid grid-cols-6 gap-4 mx-5 my-5">
        {estadoBusqueda
          ? Comidas.map((item) => (
              <div
                className="flex flex-col justify-start bg-slate-300 rounded-lg"
                key={item.id}
              >
                <img
                  decoding="async"
                  height="198px"
                  width="298px"
                  className="rounded-t-lg"
                  src={CostillaCerdoBarcacoa}
                  alt={`Image de ${item.nombre}`}
                />
                <p className="text-xl font-bold text-center">{item.nombre} </p>
                <p className="text-l text-center">{item.descripcion}</p>
                <p className="text-xl font-semibold text-center ">
                  {item.precio}$
                </p>
              </div>
            ))
          : buscarCategoria.map((item) => (
              <div
                className="flex flex-col justify-start bg-slate-300 rounded-lg"
                key={item.id}
              >
                <img
                  decoding="async"
                  height="198px"
                  width="298px"
                  className="rounded-t-lg "
                  src={CostillaCerdoBarcacoa}
                  alt={`Image de ${item.nombre}`}
                />
                <p className="text-xl font-bold text-center">{item.nombre} </p>
                <p className="text-l text-center">{item.descripcion}</p>
                <p className="text-xl font-semibold text-center ">
                  {item.precio}$
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
