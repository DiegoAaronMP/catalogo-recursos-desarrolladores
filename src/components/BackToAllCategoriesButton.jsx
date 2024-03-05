{/* Botón para retornar a todas la categorías */}
import { IconArrowNarrowLeft } from '@tabler/icons-react'

export const BackToAllCategoriesButton = () => {
    return (
        <div className='items-center transition duration-75 hover:underline hover:bg-amber-300 col-span-full text-amber-950 bg-amber-200 p-2 rounded-lg'>
            <a className='flex gap-2' href="/">
                <IconArrowNarrowLeft />
                Todas las categorías
            </a>
        </div>
    )
}
