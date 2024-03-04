{/* Botón para retornar a todas la categorías */}
import { IconArrowNarrowLeft } from '@tabler/icons-react'

export const BackToAllCategoriesButton = () => {
    return (
        <div className='items-center transition duration-75 hover:underline hover:brightness-95 col-span-full bg-slate-200 p-2 rounded-md'>
            <a className='flex gap-2' href="">
                <IconArrowNarrowLeft />
                Todas las categorías
            </a>
        </div>
    )
}
