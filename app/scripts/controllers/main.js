'use strict';

/**
 * @ngdoc function
 * @name myFirstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myFirstApp
 */
angular.module('myFirstApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
