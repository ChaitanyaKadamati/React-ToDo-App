import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  console.log('Visibility Reducer ' + state);
  // reducers for visibility filter
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      state = action.filter;
      break;
    default:
      break;
  }
  return state;
}

export default visibilityFilter