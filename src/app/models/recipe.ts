import { CategoryRecipeEnum } from './category-recipe.enum';
import { Ingredient } from './ingredient';

export class Recipe {
    public id: string;
    public name: string;
    public ingredients: Ingredient[];
    public steps: string;
    public time: number;
    public portions: number;
    public visibility: boolean;
    public category: CategoryRecipeEnum;
}