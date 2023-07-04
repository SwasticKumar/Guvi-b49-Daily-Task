
// Write a “person” class to hold all the details.

class Person {
  constructor(name, age, qualification, address, place) {
    this.name = name;
    this.age = age;
    this.qualification = qualification;
    this.address = address;
    this.place = place;
  }
  personDetails() {
    console.log(
      "Name:",
      this.name,
      ",",
      "Age:",
      this.age,
      ",",
      "Qualification:",
      this.qualification,
      ",",
      "Address:",
      this.address,
      ",",
      "Place:",
      this.place
    );
  }
}
let peru = new Person("Swastic", 26, "B.tech-Civil", "Anna Nagar", "Trichy");
peru.personDetails();
