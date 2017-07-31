import angular from 'angular';
import archiveService from './archive/archive';

const ServicesModule = angular.module('app.services', [])
  .service('archiveService', archiveService)

export default ServicesModule;