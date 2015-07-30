angular.module('imageUploaderApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'imageUploaderModule']);

angular.module('imageUploaderApp').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/images');

});

angular.module('imageUploaderApp').run(function($rootScope) {

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
