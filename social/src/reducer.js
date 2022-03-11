export const reducer = (state, action) => {
  const actions = {
    CREATE_POST: {...state, posts: [action.payload.newPost, ...state.posts]},
    REMOVE_POST: 0
  }

  return actions[action.type] || state
}
