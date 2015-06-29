var apiKey = 'MDE5NzIyOTQ3MDE0MzU1OTc0NjgzMzRhZg001',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

var app = angular.module('myApp', []);

app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = './media/test.mp3';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });

  $http({
    method: 'JSONP',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
  }).success(function(data, status) {
    $scope.programs = data.list.story;
  }).error(function(data, status) {

  });
  
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);

