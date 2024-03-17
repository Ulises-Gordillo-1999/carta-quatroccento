import React, { useEffect, useState } from "react";
import { Comidas } from "./carta.js";
import Navbar from "./Navbar.jsx";

export default function Carta() {
  const [carta, setCarta] = useState([]);
  const [buscarCategoria, setBuscarCategoria] = useState([]);
  const [estadoBusqueda, setEstadoBusqueda] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCarta(Comidas);
    }, 2000);
  }, []);

  const clickCategoria = (e) => {
    const categoria = e.target.value;
    const cartaCategoria = carta.filter((item) => item.categoria === categoria);
    setBuscarCategoria(cartaCategoria);
    setEstadoBusqueda(false)
  };


  return (
    <div className="bg-slate-100">
      <div className="flex justify-center items-center h-16 ">
        <h1 className="text-4xl">QUATTOCCENTO RESTAURANT</h1>
      </div>
      <Navbar clickCategoria={clickCategoria} />
      <div className="grid grid-cols-6 gap-4 mx-5 my-5">
        {estadoBusqueda ? (
          carta.map((item) => (
            <div className="bg-slate-300" key={item.id}>
              <img src="https://picsum.photos/298/193" />
              <p className="text-xl font-bold text-center">{item.nombre} </p>
              <p className="text-l text-center">{item.descripcion}</p>
              <p className="text-xl font-semibold text-center ">
                {item.precio}$
              </p>
            </div>
          ))
        ) : (
          buscarCategoria.map((item) => (
            <div className="bg-slate-300" key={item.id}>
              <img src="https://picsum.photos/298/193" />
              <p className="text-xl font-bold text-center">{item.nombre} </p>
              <p className="text-l text-center">{item.descripcion}</p>
              <p className="text-xl font-semibold text-center ">
                {item.precio}$
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
