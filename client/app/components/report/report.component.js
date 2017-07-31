import template from './report.component.html';
import controller from './report.controller.js';
import './report.component.scss';

let reportComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'reportController'
};
export default reportComponent;