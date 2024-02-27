import React from 'react'
import { CategoryCard } from './components/CategoryCard'
import { ResourceCard } from './components/ResourceCard'

export const CatalogoApp = () => {
    return (
        <>
            <h1 className='mt-20 mx-auto text-center text-5xl font-bold'>
                Catálogo de recursos para desarrolladores
            </h1>
            <h2 className='mt-4 mb-6 mx-auto text-center text-xl'>
                Un texto más como subtítulo
            </h2>

            {/* Contenedor */}
            <div className='grid grid-cols-3 auto-rows-max p-4 gap-3 bg-white w-auto h-svh mx-40 rounded-md'>
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
            </div>
        </>
    )
}
