import { IconExternalLink } from '@tabler/icons-react'
import React from 'react'

export const ResourceCard = ({ title, category, tags, description, image, }) => {
    return (
        <div className='flex flex-col rounded-xl border border-gray-200 transition hover:bg-sky-50 hover:-translate-y-0.5 hover:ring-2 hover:ring-blue-400 cursor-pointer'>
            {/* <span className='absolute -mt-3 -ml-3 px-2 rounded-xl bg-red-200 text-red-800 text-sm font-roboto font-semibold'>Categoría</span> */}
            <img className='rounded-xl m-3 aspect-video' src={`${image}`} alt="Imagen del recurso" />

            <div className='mx-3 mb-3'>
                <div className='flex flex-wrap gap-1 mt-1'>
                    {
                        tags.map(tag => (
                            <span key={tag} className='rounded-xl px-1.5 bg-amber-200 text-amber-950 text-xs font-roboto font-medium p-0.5'>{tag}</span>
                        ))
                    }
                </div>
                <h3 className='mt-1.5 text-base text-blue-900 font-roboto-condensed font-bold transition duration-75 hover:underline'>{title}</h3>
                <p className='mt-1.5 text-sm font-roboto opacity-95'>{description}</p>
            </div>
            
            <button className='flex justify-center items-center m-2 mt-auto py-1.5 gap-1 transition duration-75 bg-blue-200 hover:bg-blue-300 text-blue-800 active:brightness-110 rounded-xl font-roboto'>
                Ir al recurso
                <IconExternalLink />
            </button>
        </div>
    )
}
