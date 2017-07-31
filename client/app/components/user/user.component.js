import template from './user.component.html';
import controller from './user.controller.js';
import './user.component.scss';

let userComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'userController'
};
export default userComponent;