describe("McxCalculator", function() {
  var McxCalculator = require('./McxCalculator');
  var mcxCalculator;

  beforeEach(function() {
    mcxCalculator = new McxCalculator();
  });

  it("should be able to play have zero result", function() {
      expect(mcxCalculator.result).toEqual(0);
      expect(mcxCalculator.valueChanged).toBeFalsy();

  });

  describe("when value is added", function() {
    beforeEach(function() {
      mcxCalculator.addValueToResult(4);
    });

    it("should indicate that the value is updated", function() {
      expect(mcxCalculator.result).toEqual(4)
      expect(mcxCalculator.valueChanged).toBeTruthy();

      // demonstrates use of 'not' with a custom matcher
      expect(mcxCalculator).not.customIsActualValueGreaterAndChanged(5);
    });

    it("should be able to add another value", function() {
      mcxCalculator.addThreeToResult();
      expect(mcxCalculator.result).toEqual(7)
      expect(mcxCalculator.valueChanged).toBeTruthy();
    });
  });

  describe("when reset is triggered", function() {
    it("should update to default state", function() {
      mcxCalculator.clearResult();

      expect(mcxCalculator.result).toEqual(0);
      expect(mcxCalculator.valueChanged).toBeFalsy();
    });

    it("should update to default state after adding value", function() {
      mcxCalculator.addThreeToResult();
      //I don't need to check the value is three because there is another test for that
      mcxCalculator.clearResult();

      expect(mcxCalculator.result).toEqual(0);
      expect(mcxCalculator.valueChanged).toBeFalsy();
    });
  });

  //demonstrates use of expected exceptions
  describe("when divide occurs on invalid value", function() {
    it("should throw and error that you cannot divide by zero", function() {
      expect(function() {
        mcxCalculator.divideValueByResult(5);
      }).toThrowError("cannot divide by zero");
    });
  });
});
