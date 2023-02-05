const initialState = {
  cards: undefined,
  characterInfo: undefined,
  comics: undefined,
  comicsInfo: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_CARDS":
      return {
        ...state,
        cards: action.payload.label,
      };
    case "GET_CHARACTER_INFO":
      return {
        ...state,
        characterInfo: action.payload,
      };
    case "SHOW_COMICS":
      return {
        ...state,
        comics: action.payload,
      };
    case "GET_COMICS_INFO":
      return {
        ...state,
        comicsInfo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
