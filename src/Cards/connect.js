import { connect } from "react-redux";
import * as cardsActions from "./actions";

function mapStateToProps(state) {
  return {
    cardsLoading: state.cards.status === "LOADING",
    status: state.cards.status,
    cards: state.cards.cards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateRegister: (item) => dispatch(cardsActions.updateRegister(item)),
    updateStatus: (status) => dispatch(cardsActions.updateStatus(status)),
    getCards: () => dispatch(cardsActions.getCards()),
    cardCreate: (card) => dispatch(cardsActions.cardCreate(card)),
    cardDelete: (cardId) => dispatch(cardsActions.cardDelete(cardId)),
    cardUpdate: (card) => dispatch(cardsActions.cardUpdate(card)),
  };
}

export default function cardsConnect(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
