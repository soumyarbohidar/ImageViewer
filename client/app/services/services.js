import angular from 'angular';
import archiveService from './archive/archive';import customerService from './customer/customer';import dashboardService from './dashboard/dashboard';import loginService from './login/login';import reportService from './report/report';import userService from './user/user';

const ServicesModule = angular.module('app.services', [])
  .service('archiveService', archiveService)  .service('customerService', customerService)  .service('dashboardService', dashboardService)  .service('loginService', loginService)  .service('reportService', reportService)  .service('userService', userService);

export default ServicesModule;