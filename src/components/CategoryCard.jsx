import { IconBrandGithubFilled } from '@tabler/icons-react';
import { categoryStyles } from '../data/consts';

export const CategoryCard = ({title}) => {

    // Colores para las cards
    const {bgColorClass, textColorClass, hoverBgColorClass, hoverTextColorClass,} = categoryStyles[title] || {};

    return (
        <a href={`/${title}`} className={`flex items-center justify-between rounded-xl transition ${bgColorClass} ${textColorClass} ${hoverBgColorClass} ${hoverTextColorClass} active:brightness-150 cursor-pointer`} rel='noreferrer'>
            <span className='mx-auto font-roboto-condensed font-semibold text-2xl'>{title}</span>
            <div className='p-4 my-auto'>
                <IconBrandGithubFilled className='size-20' />
            </div>
        </a>
    )
}
