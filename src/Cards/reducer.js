const initialState = {
  cards: [],
  status: "",
};

function cards(state = initialState, action) {
  switch (action.type) {
    case "CARDS_UPDATE_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "CARDS_UPDATE_REGISTER":
      return {
        ...state,
        ...action.item,
      };
    default:
      return state;
  }
}

export default cards;
