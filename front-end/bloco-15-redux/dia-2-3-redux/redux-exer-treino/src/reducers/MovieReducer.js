import { categories } from '../components/data';


const INITIAL_STATE = {
  category: [...categories],
  selectedMovie: {},
  selectedCategory: {}
}

function MovieReducer(state = INITIAL_STATE, action) {
  if(action.type === "SELECTED_MOVIE"){
    return {
      ...state,
      selectedMovie: action.movie,
      selectedCategory: action.category
    }
  }
  return state;
}

export default MovieReducer;