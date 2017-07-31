import template from './customer.component.html';
import controller from './customer.controller.js';
import './customer.component.scss';

let customerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'customerController'
};
export default customerComponent;