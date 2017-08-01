import { loginService } from '../../services/login/login';

class loginController {
    constructor(loginService) {
      this.name = 'login';
      this._loginService = loginService;
    }
    login() {
      console.log('Inside login method');
      this._loginService.getData();
      console.log('inside login controller');
    }
  }

loginController.$inject = ['loginService'];
export default loginController;
