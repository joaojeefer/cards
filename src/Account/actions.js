import { AsyncStorage } from "react-native";
import api from "@services/api";
import config from "@services/config";

const { url } = config;

export function initSession() {
  return (dispatch) => {
    return AsyncStorage.getItem("token")
      .then((token) => dispatch(checkAuth(token)))
      .catch((error) => dispatch(updateStatus("NO_SESSION")));
  };
}

export function checkAuth(token) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(updateStatus("NO_SESSION"));
    }, 1000);
  };
}

export function updateCredentials(credentials) {
  return {
    type: "ACCOUNT_UPDATE_CREDENTIALS",
    credentials,
  };
}

export function updateRegister(item) {
  return {
    type: "ACCOUNT_UPDATE_REGISTER",
    item,
  };
}

export function updateStatus(status) {
  return {
    type: "ACCOUNT_UPDATE_STATUS",
    status,
  };
}

export function signIn() {
  return (dispatch, getState) => {
    const { credentials } = getState().account;
    dispatch(updateStatus("LOADING"));
    return api
      .post(url.signIn, credentials)
      .then(({ data }) => {
        const { name, email } = data.user;
        dispatch(updateRegister({ credentialsError: false }));
        dispatch(updateRegister({ profile: { name, email } }));
        AsyncStorage.setItem("token", data.token);
        dispatch(updateStatus("SESSION_STARTED"));
      })
      .catch((error) => {
        dispatch(updateRegister({ credentialsError: true }));
        dispatch(updateStatus("NO_SESSION"));
      });
  };
}

export function createAccount(newAccountForm) {
  return (dispatch) => {
    dispatch(updateStatus("LOADING"));
    return api
      .post(url.createAccount, newAccountForm)
      .then(({ data }) => {
        const { name, email } = data;
        dispatch(updateRegister({ profile: { name, email } }));
        dispatch(updateRegister({ formNewAccountError: false }));
        dispatch(updateStatus("ACCOUNT_CREATED_SUCCESS"));
      })
      .catch((error) => {
        dispatch(updateRegister({ formNewAccountError: true }));
        dispatch(updateStatus("ACCOUNT_CREATED_FAIL"));
      });
  };
}
