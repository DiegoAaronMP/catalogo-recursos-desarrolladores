import { IconBrandGithubFilled } from '@tabler/icons-react'

export const CategoryCard = () => {
    return (
        <div className='flex items-center justify-between rounded-xl text-black hover:text-white bg-slate-300 hover:bg-slate-800 cursor-pointer'>
            <div className='p-4 my-auto'>
                <IconBrandGithubFilled className='size-20' />
            </div>
            <span className='mx-auto font-roboto-condensed font-semibold text-2xl'>Categoría</span>
        </div>
    )
}
