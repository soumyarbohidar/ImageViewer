import angular from 'angular';
    import ArchiveModule from './archive/archive.module';    import CustomerModule from './customer/customer.module';    import LoginModule from './login/login.module';    import ReportModule from './report/report.module';    import UserModule from './user/user.module';    import DashboardModule from './dashboard/dashboard.module';

const ComponentsModule = angular.module('app.components',[
       ArchiveModule.name,      CustomerModule.name,      LoginModule.name,      ReportModule.name,      UserModule.name,      DashboardModule.name 
]);

export default ComponentsModule;