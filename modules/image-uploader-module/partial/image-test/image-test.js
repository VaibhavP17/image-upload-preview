angular.module('imageUploaderModule').controller('ImageTestCtrl',function($scope, $timeout){

	$scope.imagesArray = [{
		src: '/images/logo.jpg',
		desc: 'Logo Image1'
	},
	{
		src: '/images/logo.jpg',
		desc: 'Logo Image2'
	},
	{
		src: '/images/logo.jpg',
		desc: 'Logo Image3'
	},{
		src: '/images/logo.jpg',
		desc: 'Logo Image4'
	}];
$scope.thumbnail = {
	dataUrl: 'heyjude'
}
$scope.fileReaderSupported = window.FileReader != null;

 $scope.photoChanged = function(files){
        if (files != null) {
            var file = files[0];
        if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
            $timeout(function() {
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = function(e) {
                    $timeout(function(){
 $scope.thumbnail.dataUrl = e.target.result;
                    });
                }
            });
        }
    }
    };
});