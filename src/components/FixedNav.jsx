import { IconBrandGithub, IconInfoCircle } from '@tabler/icons-react'

export const FixedNav = () => {

  return (
    <nav className='fixed top-0 end-0 z-10 bg-black text-white py-1.5 px-3 rounded-bl-lg drop-shadow-sm cursor-pointer'>
      <ul className='flex flex-row gap-2'>
        <li className='transition hover:scale-110'>
          <a
            href='https://github.com/DiegoAaronMP/catalogo-recursos-desarrolladores'
            role='button'
            aria-label='Ir a la página del repositorio en Github'
            title='Ir a la página del repositorio en Github'
            target='_blank'
            rel='noreferrer'
          >
            <IconBrandGithub className='size-8' alt='Ícono de GitHub' />
          </a>
        </li>
        <li className='transition hover:scale-110'>
          <a
            id='open-info-modal'
            data-modal-target="info-modal" 
            data-modal-toggle="info-modal" 
            role='button'
            aria-label='Ver más información sobre el proyecto'
            title='Ver más información sobre el proyecto'
          >
            <IconInfoCircle className='size-8' alt='Ícono de información' />
          </a>
        </li>
      </ul>
    </nav>
  )
}
