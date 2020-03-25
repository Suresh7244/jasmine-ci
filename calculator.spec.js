// suite?

// Group of specs
// Group of tests!

// suites let us organize our specs!

// spec ---->Test
// ->spec

// short of specifications:
// Set (group) of expectations that tests the state of the code

// expect 1:
//  - expectation 1
//  - expectation 2

describe("calculator.js", function() {
  // TODO : specs!
  it("should add numbers to total", function() {
    // TODO : expectations!
    const calculator = new Calculator();
    calculator.add(5);

    expect(calculator.total).toBe(5);
  });
  it("should subtract numbers from total", function() {
    // TODO : expectations!
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.subtract(5);
    expect(calculator.total).toBe(5);
  });

  it("should multiply total by number", function() {
    // TODO : expectations!
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply(2);
    expect(calculator.total).toBe(20);
  });

  it("should divide total by number", function() {
    // TODO : expectations!
    const calculator = new Calculator();
    calculator.total = 2;
    calculator.divide(2);
    expect(calculator.total).toBe(1);
  });

  it("can be instantiated", function() {
    const calculator = new Calculator();
    const calculator1 = new Calculator();

    expect(calculator).toBeTruthy();
    expect(calculator1).toBeTruthy();

    expect(calculator).toEqual(calculator1);
  });

  it("instantiates unique object", function() {
    const calculator = new Calculator();
    const calculator1 = new Calculator();

    expect(calculator).not.toBe(calculator1);
  });

  it("does not handle NaN", function() {
    const calculator = new Calculator();
    calculator.total = 20;
    calculator.multiply("a");

    expect(calculator.total).toBeNaN();
  });

  it("handles divide by zero", function() {
    const calculator = new Calculator();

    expect(function() {
      calculator.divide(0);
    }).toThrow();
    expect(function() {
      calculator.divide(0);
    }).toThrowError(Error);

    expect(function(){ calculator.divide(0)}).toThrowError(Error,'Cannot divide by zero');
    
  });

  it('returns total',function(){
    const calculator = new Calculator();
    calculator.total = 50;

    expect(calculator.add(20)).toBe(70);
    expect(calculator.total).toMatch(/-?\d+/);
    expect(typeof calculator.total).toMatch('number');

    expect(calculator.total).toEqual(jasmine.anything());

  })
});

