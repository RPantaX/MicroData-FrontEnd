
export const productReducer = (state = [], action) => {
  switch (action.type){
    case 'addProduct':
        return[
          {
            ...action.payload,
          },
            ...state
        ]
    case 'updateProduct':
      return state.map(p => {
        if (p.id === action.payload.id) {
          return { ...p, stock: action.payload.stock };
        }
        return p;
      });
    case 'loadingProducts':
      return action.payload;
    default:
      return state;
  }
}
