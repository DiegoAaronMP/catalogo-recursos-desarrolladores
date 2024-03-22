import { categoryStyles } from '../consts/categoryStyles';
import { categoryIcons } from '../consts/categoryIcons';

export const CategoryCard = ({ title }) => {

    // Colores para las cards
    const { bgColorClass, textColorClass, hoverBgColorClass, hoverTextColorClass, } = categoryStyles[title] || {};

    // Iconos para las cards
    const { Icon } = categoryIcons[title] || {};

    return (
        <a
            href={`/${title}`}
            className={`flex items-center justify-between rounded-xl transition ${bgColorClass} ${textColorClass} ${hoverBgColorClass} ${hoverTextColorClass} active:brightness-150 cursor-pointer`}
            rel='noreferrer'
            role='button'
            aria-label={`Ir a la página de ${title}`}
            title={`Ir a la página de ${title}`}
        >
            <span className='mx-auto font-roboto-condensed font-semibold text-2xl'>{title}</span>
            <div className='p-4 my-auto'>
                <Icon className='size-20' alt={`Ícono de ${title}`} />
            </div>
        </a>
    )
}
