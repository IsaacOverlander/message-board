const myApp = angular.module('myApp', [] );

myApp.controller('AppController', function($http) {
    const vm = this;
    vm.messagesList = [];
    
    vm.sendMessage = function(){
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
            getMessages();
        }).catch(function(error) {
            console.log('Error posting message:', error);
            alert('Error posting message');
        });//End POST
    }

    function getMessages() {
        $http({
            method: 'GET',
            url: '/messages'
        }).then(function (response) {
            vm.messagesList = response.data;
            console.log(vm.messagesList);
        }).catch(function (error) {
            console.log('Error getting messages:', error);
        });// End GET
    };
    getMessages();
});