'use strict';

/**
 * @ngdoc function
 * @name myFirstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstApp
 */
angular.module('myFirstApp')
  .controller('FeaturesCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
