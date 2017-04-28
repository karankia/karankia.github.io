var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/',{
	controller:'MoviesController',
	templateUrl:'views/movies.html'
})
.when('/movies',{
	controller:'MoviesController',
	templateUrl:'views/movies.html'
})
.when('/movies/details/:id',{
	controller:'MoviesController',
	templateUrl:'views/movie_details.html'
})

.otherwise({
	redirectTo:'/'
});
});
