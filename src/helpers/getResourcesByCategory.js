/**
 * Código inspirado en el Curso de React De cero a experto
 * impartido por Fernando Herrera
 */
import { categoryArray } from "../data/consts";
import { resources } from "../data/resources";

export const getResourcesByCategory = (category) => {
    /**
     * categoryArray se utiliza para marcar la lista 
     * válida de categorías
     */ 
    categoryArray;

    if (!categoryArray.includes(category)) {
        throw new Error(`${category} no es una categoría válida`);
    }

    return resources.filter(resource => resource.category === category);

}