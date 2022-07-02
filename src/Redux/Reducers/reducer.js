const initialState = [
  {
    id: 0,
    name: "Umidjon Yusufov",
    number: 998906687474,
    email: "umidjonyusufov@gmail.com",
  },
  {
    id: 1,
    name: "John Doe",
    number: 998906687373,
    email: "jhondoe@gmail.com",
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;
    default:
      return state;
  }
};

export default reducer;
