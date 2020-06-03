import { AsyncStorage } from "react-native";
import api from "@services/api";
import config from "@services/config";

const { url } = config;

export function updateStatus(status) {
  return {
    type: "CARDS_UPDATE_STATUS",
    status,
  };
}

export function updateRegister(item) {
  return {
    type: "CARDS_UPDATE_REGISTER",
    item,
  };
}

export function getCards() {
  return async (dispatch) => {
    dispatch(updateStatus("LOADING"));
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return api
      .get(url.getCards, config)
      .then(({ data }) => {
        dispatch(updateStatus("CARDS_GET_SUCCESS"));
        dispatch(updateRegister({ cards: data }));
      })
      .catch((error) => {
        dispatch(updateStatus("CARDS_GET_FAIL"));
      });
  };
}

export function cardCreate(card) {
  return async (dispatch) => {
    dispatch(updateStatus("LOADING"));
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return api
      .post(url.cardCreate, card, config)
      .then(({ data }) => {
        dispatch(getCards());
        dispatch(updateStatus("CARDS_CREATE_SUCCESS"));
      })
      .catch((error) => {
        dispatch(updateStatus("CARDS_CREATE_FAIL"));
      });
  };
}

export function cardDelete(cardId) {
  return async (dispatch) => {
    dispatch(updateStatus("LOADING"));
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return api
      .delete(`/cards/${cardId}`, config)
      .then(({ data }) => {
        dispatch(updateRegister({ cards: data }));
        dispatch(updateStatus("CARDS_DELETE_SUCCESS"));
      })
      .catch((error) => {
        dispatch(updateStatus("CARDS_DELETE_FAIL"));
      });
  };
}

export function cardUpdate(card) {
  return async (dispatch) => {
    dispatch(updateStatus("LOADING"));
    const { id, title, content } = card;
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return api
      .put(`/cards/${id}`, { title, content }, config)
      .then(({ data }) => {
        dispatch(getCards());
        dispatch(updateStatus("CARDS_UPDATE_SUCCESS"));
      })
      .catch((error) => {
        dispatch(updateStatus("CARDS_UPDATE_FAIL"));
      });
  };
}
