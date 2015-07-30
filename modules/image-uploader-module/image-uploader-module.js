angular.module('imageUploaderModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('imageUploaderModule').config(function($stateProvider) {

$stateProvider.state('images',{
	url: '/images',
	templateUrl: '/modules/image-uploader-module/partial/image-test/image-test.html',
	controller: 'ImageTestCtrl'
})
    /* Add New States Above */

});

