describe('shoppingListService', function () {

    beforeEach(module('lists'));

    var service;

    beforeEach(inject(function(_shoppingListService_) {
        service = _shoppingListService_;
    }));

    describe('getList', function() {
       it('should return the list', function() {
           expect(service.getList()).toEqual([]);
       });
    });

    describe('addToList', function() {
       it('should add the item to the list', function() {
           service.addToList('apple');
           service.addToList('banana');
           expect(service.getList()).toEqual(['apple', 'banana']);
       });
    });

    describe('appendToList', function() {
       it('should add another list to the shopping list', function() {
           service.appendToList(['carrots', 'durian']);
           expect(service.getList()).toEqual(['carrots', 'durian']);
       });

        it('should not append and report to console when the other list is not an array', function() {
            spyOn(console, 'log');
            service.appendToList(42);
            expect(service.getList()).toEqual([]);
            expect(console.log).toHaveBeenCalledWith('Error in appendToList');
        });
    });
});
