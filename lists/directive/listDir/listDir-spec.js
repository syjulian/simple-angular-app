describe('listDir', function () {

    beforeEach(module('lists/directive/listDir/listDir.html'));
    beforeEach(module('lists/directive/listItemDir/listItemDir.html'));
    beforeEach(module('lists'));

    var scope, compile;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
    }));

    it('should have a header for the list', function () {
        scope.title = 'My shopping list';
        var element = compile('<list-dir title="title"></list-dir>')(scope);
        scope.$apply();

        var titleText = element.find('h2').text();
        expect(titleText).toEqual('My shopping list');
    });

    it('should have a list of the items', function() {
        scope.list = ['apple', 'tomatoes'];
       var element = compile('<list-dir list="list"></list-dir>')(scope);
        scope.$apply();

        var isolateScope = element.isolateScope();
        expect(isolateScope.list).toEqual(['apple', 'tomatoes']);
    });
});
