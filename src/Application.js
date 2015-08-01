var SriVenkatachalapathy=angular.module('SriPrasannaVenkatachalapathy',['angular-flexslider','ui.router']);
SriVenkatachalapathy.config(['$stateProvider', '$urlRouterProvider',
 function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state({
		name: 'Home',
		url: '/Home',
		templateUrl: 'Partials/Home.html',
        controller: 'SriNarayanCtrl'
	});
   

	$stateProvider.state({
		name: 'About',
		url: '/AboutUs',
		templateUrl: 'Partials/AboutUs.html'
        
	});

	$stateProvider.state({
		name: 'Timings',
		url: '/Timings',
		templateUrl:'Partials/Timings.html'
	});
	$stateProvider.state({
		name: 'Events',
		url: '/Events',
		templateUrl:'Partials/Events.html'
	});
	$stateProvider.state({
		name: 'Donations',
		url: '/Donations',
		templateUrl:'Partials/Donations.html',
		controller: 'SriLakshmiCtrl'
	});
	
	 $urlRouterProvider.otherwise('Home');
}]);     
