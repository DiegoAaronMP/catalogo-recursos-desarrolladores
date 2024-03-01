import React from 'react'
import { CategoryCard } from './components/CategoryCard'
import { ResourceCard } from './components/ResourceCard'

export const CatalogoApp = () => {
    return (
        <>
            <h1 className='mt-20 mx-auto text-center text-5xl font-roboto-condensed font-bold'>
                Catálogo de recursos para desarrolladores
            </h1>
            <h2 className='mt-4 mb-6 mx-auto text-center font-roboto-condensed text-xl'>
                Un texto más como subtítulo
            </h2>

            {/* Contenedor */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max p-4 gap-3 gap-y-5 bg-white mx-7 md:mx-16 lg:mx-40 w-auto h-auto rounded-md'>
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
            </div>
        </>
    )
}
