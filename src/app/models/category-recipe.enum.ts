export enum CategoryRecipeEnum {
    BOLOS = 'BOLOS',
    CARNES = 'CARNES',
    FRUTOS_DO_MAR = 'FRUTOS_DO_MAR',
    SALADAS = 'SALADAS',
    SAUDAVEL = 'SAUDAVEL',
    SOPAS = 'SOPAS',
}

export const CATEGORY_RECIPE_MAP = new Map<
    CategoryRecipeEnum,
    string
>([
    [CategoryRecipeEnum.BOLOS, 'Bolos'],
    [CategoryRecipeEnum.CARNES, 'Carnes'],
    [CategoryRecipeEnum.FRUTOS_DO_MAR, 'Frutos do Mar'],
    [CategoryRecipeEnum.SALADAS, 'Saladas'],
    [CategoryRecipeEnum.SAUDAVEL, 'Saudável'],
    [CategoryRecipeEnum.SOPAS, 'Sopas'],
]);
    
