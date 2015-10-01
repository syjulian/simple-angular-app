describe('listItemDir', function () {

    beforeEach(module('lists/directive/listItemDir/listItemDir.html'));
    beforeEach(module('lists'));

    var scope, compile;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
    }));

    describe('formatText', function() {
        it('should make the text in all uppercase', function() {
            var element = compile('<list-item-dir></list-item-dir>')(scope);
            scope.$apply();
            var isolateScope = element.isolateScope();
            var text = isolateScope.formatText('candy');
            expect(text).toEqual('CANDY');
        });
    });

    it('should display the formatted text', function () {
        scope.text = 'blueberries';
        var element = compile('<list-item-dir value="text"></list-item-dir>')(scope);
        scope.$apply();

        expect(element.text()).toBe('BLUEBERRIES');
    });
});
