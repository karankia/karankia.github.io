var myApp = angular.module('myApp');
myApp.controller('MoviesController',['$scope', '$rootScope','$http','$location','$routeParams', '$timeout', function($scope,$rootScope,$http,$location,$routeParams,$timeout){
$rootScope.not_found = false;
$scope.getMovies = function(){

$http.get('http://api-public.guidebox.com/v2/movies/?limit=96&api_key=8341b6a997ff697ff06785ecc82069922f4f32d8').then(successCallback, errorCallback);

function successCallback(response){
    //success code
    $rootScope.movies=response.data;
    console.log($scope.movies);

		}
	function errorCallback(error){
    //error code
    throw error;
		}
	};

	$scope.getMovie = function(){
		var id =$routeParams.id;

	$http.get('http://api-public.guidebox.com/v2/movies/'+id+'?api_key=8341b6a997ff697ff06785ecc82069922f4f32d8').then(successCallback, errorCallback);
	function successCallback(response){
    		//success code
    	$rootScope.movie=response.data;
    	console.log($scope.movie);

		}
		function errorCallback(error){
    	//error code
    	throw error;
			}

	};

	$scope.search = function(searchterm) {
		console.log($scope.searchterm);


	$http.get('http://api-public.guidebox.com/v2/search?type=movie&field=title&query='+$scope.searchterm+'&api_key=8341b6a997ff697ff06785ecc82069922f4f32d8').then(function (response){
  
    console.log('Search Result::', response.data);
    if(response.data.total_results == "0") {
    	console.log('no results found');
    	$timeout(function() {
    		$rootScope.not_found = false;
    	}, 5000);
    	$rootScope.not_found = true;
    	// $scope.$apply();
    	return false;
    } else {
    	$rootScope.movies=response.data;
    }
    console.log(angular.toJson($scope.movies));

		}, errorCallback);
	
	function errorCallback(error){
    //error code
    throw error;
		}
	};


}]);
