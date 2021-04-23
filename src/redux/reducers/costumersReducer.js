const costumersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COSTUMERS":
      return action.payload;
    default:
      return state;
  }
};

export default costumersReducer;
