import React from 'react'

export const ResourceCard = () => {
    return (
        <div className='flex flex-col rounded-xl border border-gray-200'>
            <span className='absolute -mt-3 -ml-3 px-2 rounded-xl bg-red-200 text-red-800 text-sm font-semibold'>Categoría</span>
            <img className='rounded-xl m-3' src="src\images\placeholder-image.webp" alt="Imagen del recurso" />

            <div className='ml-3 mb-3'>
                <div className='flex gap-1 mt-1'>
                    <span className='rounded-xl px-1.5 bg-blue-200 text-blue-800 text-xs font-medium p-0.5'>Etiquetas</span>
                    <span className='rounded-xl px-1.5 bg-blue-200 text-blue-800 text-xs font-medium p-0.5'>Etiquetas</span>
                </div>
                <h3 className='mt-1.5 text-base font-bold'>Nombre del recurso</h3>
                <p className='mt-1.5 text-sm opacity-95'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates corporis ipsam.</p>
            </div>

            <button className='bg-lime-200 text-lime-800 rounded-xl m-2 py-1.5'>
                Ir al recurso
            </button>
        </div>
    )
}
