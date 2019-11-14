import { configure } from 'mobx';
import UserStore from './UserStore';
import UIStore from './UIStore';
import FipeStore from './FipeStore';

export default class RootStore {
  constructor() {
    configure({ enforceActions: 'always' });
    this.userStore = new UserStore();
    this.uiStore = new UIStore();
    this.fipeStore = new FipeStore();
  }
}
