import { connect } from "react-redux";
import * as accountActions from "./actions";

function mapStateToProps(state) {
  return {
    accountLoading: state.account.status === "LOADING",
    credentials: state.account.credentials,
    credentialsError: state.account.credentialsError,
    formNewAccountError: state.account.formNewAccountError,
    authenticated: state.account.status === "SESSION_STARTED",
    status: state.account.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initSession: () => dispatch(accountActions.initSession()),
    updateCredentials: (credentials) =>
      dispatch(accountActions.updateCredentials(credentials)),
    updateRegister: (item) => dispatch(accountActions.updateRegister(item)),
    updateStatus: (status) => dispatch(accountActions.updateStatus(status)),
    signIn: () => dispatch(accountActions.signIn()),
    createAccount: (newAccountForm) =>
      dispatch(accountActions.createAccount(newAccountForm)),
  };
}

export default function accountConnect(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
