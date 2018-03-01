import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Adobo Recipe',
      'A tasty classic Filipino recipe',
      'http://2.bp.blogspot.com/-fJLCy4m8OD8/T9K7PlygFqI/AAAAAAAAHrY/MeFcYoPpHcI/s1600/IMG_4536.JPG',
      [
        new Ingredient('pork belly', 2, 'lbs'),
        new Ingredient('garlic, minced or crushed', 2, 'tbsp'),
        new Ingredient('dried bay leaves', 2, 'pcs'),
        new Ingredient('Vinegar', 4, 'tbsp'),
        new Ingredient('soy sauce', 1.5, 'cup'),
        new Ingredient('whole pepper corn', 1, 'tbsp'),
        new Ingredient('water', 1, 'cup'),
        new Ingredient('salt', 1, 'to taste')
      ]),
    new Recipe(
      'Menudo Recipe',
      'Menudo, or pancita is a traditional Mexican soup, made with beef stomach in broth with a red chili pepper base.',
      'http://1.bp.blogspot.com/-Esb8Zaq3jPc/UQ1h36qsrhI/AAAAAAAAE14/JlaFs4pCfh0/s1600/beef-kaldereta.jpg',
      [
        new Ingredient('pork', 2, 'lbs'),
        new Ingredient('pig liver', 1.4, 'tbsp'),
        new Ingredient('potatoes, diced', 1, 'cup'),
        new Ingredient('medium carrot, cubed', 1, 'pcs'),
        new Ingredient('lemon', 1.5, 'pcs'),
        new Ingredient('small onion, chopped', 1, 'pcs'),
        new Ingredient('cloves garlic, minced', 3, 'pcs'),
        new Ingredient('sugar', 1, 'tsp'),
        new Ingredient('tomato sauce', .75, 'cup'),
        new Ingredient('water', 1, 'cup'),
        new Ingredient('hotdogs, sliced diagonally', 4, 'pcs'),
        new Ingredient('cooking oil', 2, 'tbsp'),
        new Ingredient('dried bay leaves', 2, 'pcs'),
        new Ingredient('Salt and pepper', 1, 'to taste')
      ]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());

  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
