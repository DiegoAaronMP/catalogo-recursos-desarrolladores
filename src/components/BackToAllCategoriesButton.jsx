{/* Botón para retornar a todas la categorías */}
import { IconArrowNarrowLeft } from '@tabler/icons-react';

export const BackToAllCategoriesButton = () => {
    return (
        <a 
            href="/" 
            className='items-center group transition duration-75 hover:underline hover:bg-amber-300 col-span-full text-amber-950 bg-amber-200 p-2 rounded-lg'
            role='button'
            aria-label='Volver a todas las categorías.'
            title='Volver a todas las categorías.'
        >
            <span className='flex gap-1'>
                <IconArrowNarrowLeft className='group-hover:-translate-x-0.5' />
                Todas las categorías
            </span>
        </a>
    )
}
