export default class FakeLogin {
  constructor() {
    this.state = {
      isLoggedIn: false
    };
  }

  login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.state.isLoggedIn = true;
        resolve(this.state.isLoggedIn);
      }, 3000);
    });
  }
  logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.state.isLoggedIn = false;
        resolve(this.state.isLoggedIn);
      }, 3000);
    });
  }
}
