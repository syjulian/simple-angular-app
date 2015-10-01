angular.module('lists').controller('ListPageCtrl',function($scope, shoppingListService){
    $scope.shoppingListTitle = "Shopping List 1.0";

    $scope.shoppingList = [];

    $scope.updateShoppingList = function(arg) {
        if(arg !== undefined) {
            if(Array.isArray(arg)) {
                shoppingListService.appendToList(arg);
            } else {
                shoppingListService.addToList(arg);
            }
        }

        $scope.shoppingList = shoppingListService.getList();
    };

});
