import { BackToAllCategoriesButton } from '../components/BackToAllCategoriesButton'
import { FixedRepoButton } from '../components/FixedRepoButton'
import { ResourceCard } from '../components/ResourceCard'

export const ResourcesPage = () => {
    return (
        <>
            <FixedRepoButton />

            <h1 className='mt-20 mx-auto text-center text-blue-900 text-5xl font-roboto-condensed font-bold'>
                Nombre de la categoría
            </h1>
            <h2 className='mt-4 mb-6 mx-auto text-center font-roboto-condensed text-xl'>
                Un texto en <b className='text-amber-800'>negritas</b> como ejemplo
            </h2>


            {/* Contenedor del botón para regresar a todas las ctagorías */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max p-4 gap-3 gap-y-5 bg-white mx-7 md:mx-16 mb-3 lg:mx-40 w-auto h-auto rounded-md'>
                {/* Botón para retornar a todas la categorías */}
                <BackToAllCategoriesButton />
            </div>

            {/* Contenedor de las cards*/}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max p-4 gap-3 gap-y-5 bg-white mx-7 md:mx-16 lg:mx-40 w-auto h-auto rounded-md'>
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
            </div>
        </>
    )
}
