// @flow

import { action, observable, decorate } from "mobx";
import remotedev from "mobx-remotedev";

const _defaultInitialState = {
  welcome: "Bem vindo ao teste de frontend mobiauto :)",
  initial: "Initial label",
};

class UserStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState);
  }

  setInitialState = initialState => {
    const { welcome, initial } = initialState;

    this.welcome = welcome;
    this.initial = initial;
  };
}

export default remotedev(
  decorate(UserStore, {
    welcome: observable,
    initial: observable,
    setInitialState: action
  })
);
