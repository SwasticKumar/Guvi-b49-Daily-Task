// write a class to calculate the uber price.

class Uber {
    constructor(price, kiloMeter, waitingChange) {
      this.price = price;
      this.kiloMeter = kiloMeter;
      this.waitingChange = waitingChange;
    }
    priceCalc() {
      let d = Math.ceil(this.kiloMeter);
      let t = Math.ceil(this.waitingChange);
      let RD = Math.ceil(d - 5);
      let farePrice = this.price + 8 * RD + 50 * t; //
      console.log(`FarePrice:`,farePrice);
    }
  }
  let uberPrice = new Uber(100, 363.5, 3.5);
  uberPrice.priceCalc();