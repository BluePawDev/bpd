var myApp = angular.module('myApp', ['ngRoute']).
controller('mainController', mainController).


myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		template: '',
		controller: "mainController"
	}).when('/register', {
		templateUrl: "views/partials/register.html",
		controller: "registerController as lc"
	})
});
