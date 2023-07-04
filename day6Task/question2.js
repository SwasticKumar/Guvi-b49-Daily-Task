//create a class of circle Radius:

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(value) {
    this.radius = value;
  }
  getColor() {
    return this.color;
  }
  setColor(value) {
    this.color = value;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

let cir = new Circle(1.0, "red");
console.log(`Circle Radius:${cir.getArea().toFixed(2)}`);
console.log(`Circle Circumference:${cir.getCircumference().toFixed(2)}`);
