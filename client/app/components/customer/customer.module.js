import angular from 'angular';
import customerComponent from './customer.component';

const customerModule = angular.module('customer', [])
  .component('customer', customerComponent);
export default customerModule;