/**
 * Array to contain all placeholder data until this React application is integrated with the Eatsy API
 */
export const PlaceholderData = [
  {
    key: "68f86f26-5fc8-46e2-b45f-e6f3839bac97",
    recipeTitle: "Recipe Title",
    recipeAuthor: "Uploader: DM1st",
    recipeSummary: "This is a recipe card. You can use this section to big up the recipe and tempt people to click it.",
    recipeImage: "https://source.unsplash.com/ykThMylLsbY",
    recipeImageTitle: "Image title",
    ingredientSet: ["Beans", "Toast"],
    method: {
      1: "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      2: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. \
          Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 \
          minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. \
          Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until \
          thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; \
          bring to a boil.",
      3: "Add rice and stir very gently to distribute.\
          Top with artichokes and peppers, and cook without stirring, until most of the liquid is \
          absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, \
          tucking them down into the rice, and cook again \
          without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. \
          (Discard any mussels that don't open.)",
      4: "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    },
  },
];

//Placeholder for each recipe object
export const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Static data for tags until the solution is integrated.
export const tags = [
  { tag: "Dessert" },
  { tag: "Cake" },
  { tag: "Christmas" },
  { tag: "Food" },
  { tag: "Drink" },
  { tag: "Healthy" },
  { tag: "Slow Cooker" },
];

//Static data for searchable recipes until the UI is integrated with the backend.
export const recipes = [
  { name: "Pasta Bake" },
  { name: "Pulled pork" },
  { name: "Homemade lemonade" },
  { name: "Gammon in COla" },
  { name: "Treacle sponge" },
  { name: "Chocolate pudding" },
  { name: "Turkey Tagine" },
];

//Static data for the number of thumbs up and down each recipe has until the solution is integrated
export const initialNumberofThumbsUp = 5;
export const initialNumberofThumbsdown = 2;
