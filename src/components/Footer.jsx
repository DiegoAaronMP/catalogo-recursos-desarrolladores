import React from 'react'

export const Footer = () => {
    return (
        <footer className='grid grid-cols-3 auto-rows-max p-4 gap-3 gap-y-5 font-roboto font-medium bg-white mx-7 mb-5 md:mx-16 lg:mx-40 w-auto h-auto rounded-md'>
            <div>
                <p>Programado por <a href="https://www.linkedin.com/in/diego-aaron-macias/" target='_blank' rel='noreferrer' className='font-semibold text-amber-800 hover:underline'>Diego Aarón</a></p>
            </div>
            <div>
                <p>Un proyecto inspirado en: </p>
                <ul>
                    <li>
                        <a href="https://freesets.vercel.app/" target='_blank' rel='noreferrer' className='font-semibold text-amber-800 hover:underline'>Freesets</a>
                    </li>
                    <li>
                        <a href="https://aifindy.com/todas-las-categorias" target='_blank' rel='noreferrer' className='font-semibold text-amber-800 hover:underline'>AIFINDY</a>
                    </li>
                </ul>
            </div>
            <div>
                <p>Gracias por los conocimientos:</p>
                <ul>
                    <li>
                        <a href="https://www.youtube.com/@midulive" target='_blank' rel='noreferrer' className='font-semibold text-amber-800 hover:underline'>Midudev</a>
                    </li>
                    <li>
                        <a href="https://cursos.devtalles.com/" target='_blank' rel='noreferrer' className='font-semibold text-amber-800 hover:underline'>DevTalles</a>
                    </li>
                </ul>
            </div>
            <div>
                <p className='text-sm font-normal'>Íconos de <a href="https://tabler.io/icons" target='_blank' rel='noreferrer' className='font-semibold text-amber-800 hover:underline'>Tabler</a></p>
            </div>
        </footer>
    )
}
