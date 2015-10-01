angular.module('lists').factory('shoppingListService', function () {

    var list = [];

    var shoppingListService = {
        getList: function() {
            return list;
        },

        addToList: function(item) {
            list.push(item);
        },

        appendToList: function(items) {
            if(!Array.isArray(items)) {
                console.log('Error in appendToList');
                return;
            }

            list = list.concat(items);
        }
    };

    return shoppingListService;
});
