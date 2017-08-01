class loginController {
    constructor() {
      this.name = 'login';
      this._loginService = loginService;
      this.data = this._loginService.data;
    }
    login() {
      this._loginService.loadData();
      console.log('inside login controller');
    }
  }

loginController.$inject = ['loginService'];
  export default loginController;
