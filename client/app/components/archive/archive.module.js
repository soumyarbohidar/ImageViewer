import angular from 'angular';
import archiveComponent from './archive.component';

const archiveModule = angular.module('archive', [])
  .component('archive', archiveComponent);
export default archiveModule;