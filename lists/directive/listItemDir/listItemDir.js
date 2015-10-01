angular.module('lists').directive('listItemDir', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            value: '='
		},
		templateUrl: 'lists/directive/listItemDir/listItemDir.html',
		link: function(scope, element, attrs) {

            scope.formatText = function(text) {
                return text.toUpperCase();
            };

            scope.text = 'empty';

            scope.$watch('value', function(newValue) {
                if((typeof  newValue) === 'string') {
                    scope.text = scope.formatText(newValue);
                }
            });
		}
	};
});
