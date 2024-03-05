import { IconBrandGithubFilled } from '@tabler/icons-react'

export const CategoryCard = () => {
    return (
        <button className='flex items-center justify-between rounded-xl text-black transition hover:text-white bg-slate-300 hover:bg-slate-800 active:brightness-150 cursor-pointer'>
            <span className='mx-auto font-roboto-condensed font-semibold text-2xl'>Categoría</span>
            <div className='p-4 my-auto'>
                <IconBrandGithubFilled className='size-20' />
            </div>
        </button>
    )
}
