import angular from 'angular';
    import ArchiveModule from './archive/archive.module';

const ComponentsModule = angular.module('app.components',[
       ArchiveModule.name, 
]);

export default ComponentsModule;