angular.module('lists').directive('listDir', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            title: '=',
            list: '='
		},
		templateUrl: 'lists/directive/listDir/listDir.html',
		link: function(scope, element, attrs, fn) {
		}
	};
});
