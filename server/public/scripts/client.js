const myApp = angular.module('myApp', [] );

myApp.controller('AppController', function($http) {
    const vm = this;
    
    vm.sendMessage= function(){
        vm.messageToSend = {
            name: vm.name,
            message: vm.message
        };
        
    }
});