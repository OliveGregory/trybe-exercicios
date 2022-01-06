
export function MovieAction(category, movie) {
  return {
    type: 'SELECTED_MOVIE',
    category,
    movie,
  }
}