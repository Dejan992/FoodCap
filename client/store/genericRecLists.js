import axios from 'axios';

/**
 * ACTION TYPES
 */
import { SET_POPULAR_RECIPES, DELETE_POPULAR_RECIPES } from './constants';

/**
 * INITIAL STATE
 */
const defaultRecipeList = { popular: [] };

/**
 * ACTION CREATORS
 */
// POPULAR LIST
const setPopular = recipes => ({ type: SET_POPULAR_RECIPES, recipes });
export const deletePopular = () => ({ type: DELETE_POPULAR_RECIPES });

/**
 * THUNK CREATORS
 */

//POPULAR THUNKS
export const setPopularRecipesThunk = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/recipes/popular');
    dispatch(setPopular(data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultRecipeList, action) {
  switch (action.type) {
    case SET_POPULAR_RECIPES:
      return { ...state, popular: action.recipes };
    case DELETE_POPULAR_RECIPES:
      return { ...state, popular: [] };
    default:
      return state;
  }
}
