import { IconBrandGithubFilled } from '@tabler/icons-react'

export const CategoryCard = () => {
    return (
        <div className='flex items-center justify-between rounded-xl hover:opacity-90 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className='bg-white rounded-full p-4 my-auto'>
                <IconBrandGithubFilled className='size-20 text-black' />
            </div>
            <span className='mx-auto text-white font-roboto-condensed font-semibold text-2xl'>Categoría</span>
        </div>
    )
}
