"use strict";

var closedCalculator = function closedCalculator(value) {
  var result = value;
  var resultCalculator = {
    add: function add(number) {
      result += number;
    },
    sub: function sub(number) {
      result -= number;
    },
    div: function div(number) {
      result /= number;
    },
    mult: function mult(number) {
      result *= number;
    },
    getResult: function getResult() {
      return result;
    }
  };
  return resultCalculator;
};

var first = closedCalculator(50);
first.add(2);
first.sub(10);
first.div(2);
first.mult(100);
var finish = first.getResult();
console.log(finish);