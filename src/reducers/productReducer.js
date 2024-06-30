
export const productReducer = (state = [], action) => {
  switch (action.type){
    case 'addProduct':
        return[
            ...state,
            {
                ...action.payload,
            }
        ]
    case 'updateProduct':
        return state.map(p=>{
          if(p.id === action.payload.id) return {...action.payload};
          return p;
        })
    case 'loadingProducts':
      return action.payload;
    default:
      return state;
  }
}
