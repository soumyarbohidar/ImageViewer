import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import loginComponent from './components/login/login.component';
import ComponentsModule from './components/components';

angular.module('app', [
  ComponentsModule.name
]).component('app', loginComponent);
