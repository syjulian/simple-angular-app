angular.module('lists', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('lists').config(function($stateProvider) {

    $stateProvider.state('listPage', {
        url: 'lists',
        templateUrl: 'lists/page/listPage/listPage.html'
    });
    /* Add New States Above */

});

