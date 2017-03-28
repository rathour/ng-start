'use strict';

/**
 * @ngdoc function
 * @name myFirstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstApp
 */
angular.module('myFirstApp')
  .controller('TeamCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });