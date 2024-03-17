import React from 'react'

export default function Navbar({clickCategoria}) {

  return (
    <div className='flex justify-around gap-2'>
      <button onClick={clickCategoria} value={'entradas'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Entradas</button>
      <button onClick={clickCategoria} value={'pescado'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Pescado</button>
      <button onClick={clickCategoria} value={'carnes'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Carnes</button>
      <button onClick={clickCategoria} value={'aves'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Aves</button>
      <button onClick={clickCategoria} value={'cerdos'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Cerdos</button>
      <button onClick={clickCategoria} value={'pastas'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Pastas</button>
      <button onClick={clickCategoria} value={'guarnicion'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Guarnicion</button>
      <button onClick={clickCategoria} value={'ensaladas'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Ensaladas</button>
      <button onClick={clickCategoria} value={'recomendado-chef'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Sugerencia de Nuestro Chef</button>
      <button onClick={clickCategoria} value={'vinos-tintos'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>VinosTintos</button>
      <button onClick={clickCategoria} value={'vinos-blancos'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Vinos Blancos</button>
      <button onClick={clickCategoria} value={'champagne'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Champagne</button>
      <button onClick={clickCategoria} value={'gaseosas'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Gaseosas</button>
      <button onClick={clickCategoria} value={'fernet'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Fernet</button>
      <button onClick={clickCategoria} value={'postres'} className='h-12 w-full bg-slate-100 hover:bg-slate-300'>Postres</button>
    </div>
  )
}
