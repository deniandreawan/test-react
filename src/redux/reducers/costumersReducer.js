const initialState = {
  a: [],
  b: [],
  c: [],
};

const costumersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COSTUMER_A":
      return {
        ...state,
        a: action.payload,
      };
    case "GET_COSTUMER_B":
      return {
        ...state,
        b: action.payload,
      };
    case "GET_COSTUMER_C":
      return {
        ...state,
        c: action.payload,
      };
    default:
      return state;
  }
};

export default costumersReducer;
