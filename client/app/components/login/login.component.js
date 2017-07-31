import template from './login.component.html';
import './login.component.scss';

const LoginComponent = {
  template
};

angular.module('app', [])
    .controller('LoginController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);

export default LoginComponent;
