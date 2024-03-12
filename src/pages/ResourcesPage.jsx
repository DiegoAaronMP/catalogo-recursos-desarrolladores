import { useParams } from 'react-router-dom'
import { BackToAllCategoriesButton } from '../components/BackToAllCategoriesButton'
import { FixedRepoButton } from '../components/FixedRepoButton'
import { ResourceCard } from '../components/ResourceCard'
import { useMemo } from 'react'
import { getResourcesByCategory } from '../helpers/getResourcesByCategory'

export const ResourcesPage = () => {

    const { category } = useParams();

    const resources = useMemo(() => getResourcesByCategory(category), [category]);

    return (
        <>

            <FixedRepoButton />

            <h1 className='mt-20 mx-auto text-center text-blue-900 text-5xl font-roboto-condensed font-bold'>
                Nombre de la categoría
            </h1>
            <h2 className='mt-4 mb-6 mx-auto text-center font-roboto-condensed text-xl'>
                Un texto en <strong className='text-amber-800'>negritas</strong> como ejemplo
            </h2>


            {/* Contenedor del botón para regresar a todas las catagorías */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max p-4 gap-3 gap-y-5 bg-white mx-7 md:mx-16 mb-3 lg:mx-40 w-auto h-auto rounded-md'>
                {/* Botón para retornar a todas la categorías */}
                <BackToAllCategoriesButton />
            </div>

            {/* Contenedor de las cards*/}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max p-4 gap-3 gap-y-5 bg-white mx-7 md:mx-16 lg:mx-40 w-auto h-auto rounded-md'>
                {
                    resources.map(resource => (
                        <ResourceCard key={resource.id} {...resource} />
                    ))
                }
            </section>
        </>
    )
}
