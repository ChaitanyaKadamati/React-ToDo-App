const todos = (state = [], action) => {
  console.log('Actions Reducer ' + JSON.stringify(state));

  // write Reducers to handle the actions.
  switch (action.type) {
    case 'ADD_TODO':
      let newItem = {
        id: state.length,
        completed: false,
        text: action.text
      }
      state = [...state, newItem]
      break;
    case 'TOGGLE_TODO':
      state = state.map(x => {
        if (x.id === action.id) {
          return { ...x, completed: !x.completed }
        }
        return x;
      })
      break;
    default:
      break;
  }
  return state;
}

export default todos