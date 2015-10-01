angular.module('simpleAngularApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'lists']);

angular.module('simpleAngularApp').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('simpleAngularApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
