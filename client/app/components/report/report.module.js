import angular from 'angular';
import reportComponent from './report.component';

const reportModule = angular.module('report', [])
  .component('report', reportComponent);
export default reportModule;