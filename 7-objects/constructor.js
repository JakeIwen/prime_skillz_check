// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base) {
  this.perimeter = function() {
    return side1 + side2 + base;
  }
  this.area = function() {
    return side1 * side2 / 2;
  }
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var tri1 = new RightTriangle(1, 2, 3);
var tri2 = new RightTriangle(4, 5, 6);

console.log(tri1.perimeter);
console.log(tri1.area);
console.log(tri2.perimeter);
console.log(tri2.area);
