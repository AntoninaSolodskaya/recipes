import { createReducer } from '../common/util/reducerUtil';
import { CREATE_RECIPE, DELETE_RECIPE, UPDATE_RECIPE } from '../actions/recipeActions/recipeConstants';

const initialState = [
  {
    id: 'fhkkpoiu',
    image: 'https://e-oboi.com/wp-content/uploads/2017/10/stock-photo-picturesque-morning-view-of-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure-717874486.jpg',
    title: 'Lunch and Snack',
    description: 'jhgjhgjggjh\n' +
    'jkjkjkkj\n' +
    '\n' +
    '\n' +
    'kjhkhk\n' +
    '\n' +
    'lkjkjlkljlkjljkll',
    servings: '4',
    prepTime: '30min',
    cookTime: '15min',
    tags: ['lunch and snack, mediterranean, easy, healthy & delicious'],
    ingredients: [
      { title: 'Baby spinach leaves, rinsed and drained', amount: '10 oz' },
      { title: 'Red onion, sliced very thin', amount: '½ cup' },
      { title: 'Balsamic vinaigrette', amount: '4 tbsp' },
    ],
    likes: '11',
    dislike: '49',
    steps: [
      'Quis animo aequo videt eum, quem inpure',
      'Illa argumenta propria videamus, cur omnia sint paria peccata',
      'Quamquam te quidem video minime esse deterritum.',
      'Unum est sine dolore esse, alterum cum voluptate',
      'Quae quidem sapientes sequuntur duce natura tamquam',
    ],
    author: {
      name: 'admin',
      avatar: 'https://thedomesticatedman.files.wordpress.com/2015/11/cropped-img_963321.jpg',
    },
  }, {
    id: 'fghviop',
    image: 'https://mirpozitiva.ru/uploads/posts/2016-10/1477469601_nature_gora.jpg',
    title: 'Main Dish',
    description: 'Sit amet est et sapien ullamcorper pharetra.',
    servings: '6',
    prepTime: '10min',
    cookTime: '8min',
    tags: ['main, dish, italian, hard, olives, salami'],
    ingredients: [
      { title: 'Cheese', amount: '3 oz' },
      { title: 'Basil', amount: '2 cups' },
      { title: 'ingredientsient3', amount: '6 cups' },
      { title: 'ingredientsient4', amount: '6 cups' },
      { title: 'ingredientsient5', amount: '3' },
      { title: 'ingredientsient6', amount: '1 tablespoon' },
    ],
    likes: '8',
    dislike: '143',
    steps: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Aliquam tincidunt mauris eu risus.',
      'Praesent dapibus, neque id cursus faucibus',
      'Tortor neque egestas augue, eu vulputate',
      'Aliquam erat volutpat, tincidunt qui',
      'Nam dui mi, tincidunt qui',
      'Accumsan porttitor, facilisis luctus, metus!',
    ],
    author: {
      name: 'Russell Bowman',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress',
    }, 
  }
];

export const createRecipe = (state, payload) => {
  return [...state, Object.assign({}, payload.recipe)]
}

export const updateRecipe = (state, payload) => {
  return [
    ...state.filter(recipe => recipe.id !== payload.recipe.id),
    Object.assign({}, payload.recipe)
  ]
}

export const deleteRecipe = (state, payload) => {
  return [
    ...state.filter(recipe => recipe.id !== payload.recipeId)
  ]
}

export default createReducer(initialState, {
  [CREATE_RECIPE]: createRecipe,
  [UPDATE_RECIPE]: updateRecipe,
  [DELETE_RECIPE]: deleteRecipe
});

