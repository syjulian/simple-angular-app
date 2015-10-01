describe('ListPageCtrl', function () {

    beforeEach(module('lists'));

    var scope, ctrl, shoppingListService;

    beforeEach(inject(function ($rootScope, $controller, _shoppingListService_) {
        scope = $rootScope.$new();
        ctrl = $controller('ListPageCtrl', {$scope: scope});
        shoppingListService = _shoppingListService_;
    }));

    it('should start with an empty shopping list', function() {
        expect(scope.shoppingList).toEqual([]);
    });

    describe('updateShoppingList', function () {
        it('should sync the list from shoppingListService with shoppingList', function () {
            spyOn(shoppingListService, 'getList').andReturn(['apple', 'oranges']);
            scope.updateShoppingList();
            expect(scope.shoppingList).toEqual(['apple', 'oranges']);
        });

        it('should add an item to the list from shoppingListService', function() {
            spyOn(shoppingListService, 'addToList');
            scope.updateShoppingList('chicken');
            expect(shoppingListService.addToList).toHaveBeenCalledWith('chicken');
        });

       it('should add a list to the list from shoppingListService', function() {
           spyOn(shoppingListService,'appendToList');
           scope.updateShoppingList(['beef', 'fish']);
           expect(shoppingListService.appendToList).toHaveBeenCalledWith(['beef', 'fish']);
       });
    });
});
