import { IconBrandGithub } from '@tabler/icons-react'

export const FixedNav = () => {
  return (
    <nav>
      <a  
        className='fixed group top-0 end-0 z-10 bg-black text-white py-1.5 px-5 rounded-bl-lg drop-shadow-sm cursor-pointer'
        href='https://github.com/DiegoAaronMP/catalogo-recursos-desarrolladores'
        role='button'
        aria-label='Ir a la página del repositorio en Github'
        title='Ir a la página del repositorio en Github'
        target='_blank'
        rel='noreferrer'
      >
        <IconBrandGithub className='size-8 transition group-hover:scale-110' alt='Ícono de GitHub'/>
      </a>
    </nav>
  )
}
