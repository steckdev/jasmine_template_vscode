function McxCalculator() {
  this.result= 0;
  this.valueChanged= false;
}
McxCalculator.prototype.addValueToResult = function(value) {
  this.result = this.result += value;
  this.valueChanged = true;
};

McxCalculator.prototype.divideValueByResult = function(value) {

  if (!this.result || this.result == 0) {
    throw new Error("cannot divide by zero");
  }

  this.result = value / this.result;
  this.valueChanged = true;
};

McxCalculator.prototype.addThreeToResult = function() {
  this.result += 3;
  this.valueChanged = true;
};

McxCalculator.prototype.clearResult = function() {
  this.result = 0;
  this.valueChanged = false;
};

module.exports = McxCalculator;