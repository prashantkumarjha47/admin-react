import { observable } from "mobx";

class Store {
  @observable isLoggedIn = false;
}
export default new Store();
