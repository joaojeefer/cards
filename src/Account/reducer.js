const initialState = {
  status: "NOT_INITIALIZED",
  credentials: {
    email: "",
    password: "",
  },
  credentialsError: false,
  formNewAccountError: false,
  authenticated: false,
  profile: {
    name: "",
    email: "",
  },
};

function account(state = initialState, action) {
  switch (action.type) {
    case "ACCOUNT_UPDATE_CREDENTIALS":
      return {
        ...state,
        credentials: action.credentials,
      };
    case "ACCOUNT_UPDATE_REGISTER":
      return {
        ...state,
        ...action.item,
      };
    case "ACCOUNT_UPDATE_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "ACCOUNT_SIGN_IN":
      return {
        ...state,
        authenticated: true,
      };
    case "ACCOUNT_UPDATE_STATUS":
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}

export default account;
