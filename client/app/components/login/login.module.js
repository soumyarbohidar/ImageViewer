import angular from 'angular';
import loginComponent from './login.component';

const loginModule = angular.module('login', [])
  .component('login', loginComponent);
export default loginModule;
