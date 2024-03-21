import React from "react";

export default function Navbar({ clickCategoria }) {
  return (
    <div className="flex flex-row w-full sm:justify-between md:justify-between lg:justify-between xl:justify-between justify-center items-center text-center mx-2 px-2">
      <button
        onClick={clickCategoria}
        value={"entradas"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Entradas
      </button>
      <button
        onClick={clickCategoria}
        value={"pescado"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Pescado
      </button>
      <button
        onClick={clickCategoria}
        value={"carnes"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Carnes
      </button>
      <button
        onClick={clickCategoria}
        value={"aves"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Aves
      </button>
      <button
        onClick={clickCategoria}
        value={"cerdos"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Cerdos
      </button>
      <button
        onClick={clickCategoria}
        value={"pastas"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Pastas
      </button>
      <button
        onClick={clickCategoria}
        value={"guarnicion"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Guarnicion
      </button>
      <button
        onClick={clickCategoria}
        value={"ensaladas"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Ensaladas
      </button>
      <button
        onClick={clickCategoria}
        value={"recomendado-chef"}
        className="w-4/5 text- sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white p-2 mt-4"
      >
        Sugerencia de Nuestro Chef
      </button>
      <button
        onClick={clickCategoria}
        value={"vinos-tintos"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        VinosTintos
      </button>
      <button
        onClick={clickCategoria}
        value={"vinos-blancos"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Vinos Blancos
      </button>
      <button
        onClick={clickCategoria}
        value={"champagne"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Champagne
      </button>
      <button
        onClick={clickCategoria}
        value={"gaseosas"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Gaseosas
      </button>
      <button
        onClick={clickCategoria}
        value={"fernet"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Fernet
      </button>
      <button
        onClick={clickCategoria}
        value={"postres"}
        className=" w-full sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-lg bg-slate-100 rounded-lg hover:transition hover:scale-125 hover:bg-[#79093a] hover:text-white"
      >
        Postres
      </button>
    </div>
  );
}
