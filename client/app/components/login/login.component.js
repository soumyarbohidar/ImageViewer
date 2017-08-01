import template from './login.component.html';
import './login.component.scss';
import controller from './login.controller.js';


let loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'loginController'
};

export default loginComponent;
