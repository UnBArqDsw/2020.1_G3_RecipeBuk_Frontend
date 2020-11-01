import { CategoryRecipeEnum } from './category-recipe.enum';
import { Ingredients } from './ingredients';

export class Recipe {
    public id: string;
    public name: string;
    public ingredients: Ingredients;
    public steps: string;
    public time: string;
    public portions: number;
    public visibility: boolean;
    public category: CategoryRecipeEnum;
}