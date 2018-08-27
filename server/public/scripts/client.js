const myApp = angular.module('myApp', [] );

myApp.controller('AppController', function($http) {
    const vm = this;
    
    vm.sendMessage= function(){
        vm.messageToSend = {
            name: vm.name,
            message: vm.message
        };
        $http({
            method: 'POST',
            url: '/',
            data: vm.messageToSend
        }).then(function(response){
            console.log(response);
        }).catch(function(error) {
            console.log('Error posting message:', error);
            alert('Error posting message');
        });//End POST
    }
});