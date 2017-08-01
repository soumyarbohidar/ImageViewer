import angular from 'angular';
import loginComponent from './login.component';
import loginService from '../../services/login/login';
import loginController from './login.controller';

const loginModule = angular.module('login', [])
  .component('login', loginComponent)
  .controller('loginController', loginController)
  .service('loginService', loginService);
export default loginModule;
