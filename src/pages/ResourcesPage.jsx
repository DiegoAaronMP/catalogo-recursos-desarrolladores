import { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { BackToAllCategoriesButton } from '../components/BackToAllCategoriesButton'
import { FixedRepoButton } from '../components/FixedRepoButton'
import { ResourceCard } from '../components/ResourceCard'
import { getResourcesByCategory } from '../helpers/getResourcesByCategory'
import { categoryIcons } from '../consts/categoryIcons'

export const ResourcesPage = () => {

    // Obtiene la categoría de los params
    const { category } = useParams();

    const resources = useMemo(() => {
        try {
            return getResourcesByCategory(category)
        } catch (error) {
            return [];
        }
    }, [category]);
    
    // Tomamos el icono de categoryIcons
    const {Icon} = categoryIcons[category];
    /**
     * Si no hay recursos, entonces regresa a la página
     * de selección de categoría
     */
    if (resources.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <>

            <FixedRepoButton />

            <h1 className='mt-20 mx-auto flex justify-center items-center gap-2 text-blue-900 text-5xl font-roboto-condensed font-bold'>
                {category}
                <Icon className='size-11'/>
            </h1>
            <h2 className='mt-4 mb-6 mx-auto text-center font-roboto-condensed text-xl'>
                Da <strong className='text-amber-800'>clic</strong> en un <strong className='text-amber-800'>recurso</strong> para ser redirigido a su página.
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
