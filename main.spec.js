// toHaveBeenCalled
// toHaveBeenCalledWith
// toHaveBeenCalledTimes

describe('calculator()', function () {
    it('validates expersion when first number is invalid', function () {
        spyOn(window, 'updateResult').and.stub();

        calculator('a+3');
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
        expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it('validates expersion when second number is invalid', function () {
        spyOn(window, 'updateResult');   //and.stub(); is the default, can be omitted

        calculator('3+b');
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
        expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it('validates expersion when operation is invalid', function () {
        spyOn(window, 'updateResult');

        calculator('3_3');
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
        expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it('calls add', function () {
        const spy = spyOn(Calculator.prototype, 'add');
        calculator('3+4');
        // expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenCalledWith(3);
        expect(spy).toHaveBeenCalledWith(4);
    });
    it('calls subtract', function () {
        const spy = spyOn(Calculator.prototype, 'subtract');
        calculator('3-7');

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(7);
    });
    it('calls multiply', function () {
        const spy = spyOn(Calculator.prototype, 'multiply');
        calculator('3*4');

        expect(spy).toHaveBeenCalled();
        expect(spy).not.toHaveBeenCalledWith(3);
        expect(spy).toHaveBeenCalledWith(4);
    });
    it('calls divide', function () {
        const spy = spyOn(Calculator.prototype, 'divide');
        calculator('12/4');

        expect(spy).toHaveBeenCalled();
        expect(spy).not.toHaveBeenCalledWith(12);
        expect(spy).toHaveBeenCalledWith(4);
    });

    it('calls updateResult (example using and.callThrough)', function () {
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'multiply').and.callThrough();

        calculator('5*5');

        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith(25);
    });
    it('calls updateResult (example using and.callFake)', function () {
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'multiply').and.callFake(function (number) {
            return 'it works';
        });

        calculator('5*5');

        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('it works');
    });
    it('calls updateResult (example using and.returnValue)', function () {
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever [multiply] return');

        calculator('5*5');

        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('whatever [multiply] return');
    });

    it('calls updateResult (example using and.returnValues)', function () {
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'add').and.returnValues(null, 'whatever [add] returns');

        calculator('5+5');

        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('whatever [add] returns');
    });

    it('does not handle errors', function () {
        spyOn(Calculator.prototype, 'multiply').and.throwError('some error');
        expect(function () { calculator('5 * 5') }).toThrowError('some error');
    });
});

describe('showVersion()', function () {
    it('calls calculator.version', function(){
        spyOn(document, 'getElementById').and.returnValue({
            innerText: null
        });
       const spy = spyOnProperty(Calculator.prototype,'version','get');

        showVersion();
        expect(spy).toHaveBeenCalled();
    })
})