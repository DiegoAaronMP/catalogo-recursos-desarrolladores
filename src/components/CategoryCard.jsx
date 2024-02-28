import { IconBrandGithubFilled } from '@tabler/icons-react'

export const CategoryCard = () => {
    return (
        <div className='flex items-center justify-between bg-stone-400 rounded-xl'>
            <div className='bg-white rounded-full p-4 my-auto'>
                <IconBrandGithubFilled className='size-20 text-stone-400' />
            </div>
            <span className='mx-auto text-white font-roboto-condensed font-semibold text-2xl'>Categoría</span>
        </div>
    )
}
