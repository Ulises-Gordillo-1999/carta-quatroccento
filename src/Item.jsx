import React from 'react'

export default function Item({content}) {

  return (
    <div>
      {content.map((item) =>(
        <div className='flex flex-col my-2' key={item.id} >
            <h1 className='text-4xl italic font-bold'>{item.title} </h1>
            <a href={item.url ? item.url : '/' } className='text-xl italic cursor-pointer'>{item.titulo} </a>
        </div>
      ))}
    </div>
  )
}
