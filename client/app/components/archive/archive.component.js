import template from './archive.component.html';
import controller from './archive.controller.js';
import './archive.component.scss';

let archiveComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'archiveController'
};
export default archiveComponent;