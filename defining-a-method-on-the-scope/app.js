var myApp = angular.module('myApp', []);

myApp.factory('Data', function(){
    return {message:"I'm data from a service"}
});

function FirstCtrl($scope, Data){
    var first = this;
    first.data = Data;
}

function SecondCtrl($scope, Data){
    var second = this;
    second.data = Data;

    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");
    }
}

myApp.controller("FirstCtrl", FirstCtrl);
myApp.controller("SecondCtrl", SecondCtrl);