const orderDescription = document.getElementById("orderDescription");
const studentInfo = document.getElementById("studentInfo");

// Define the Pizza class
class Pizza {
  constructor(size, crust, toppings, sauce, cheese, instructions) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.sauce = sauce;
    this.cheese = cheese;
    this.instructions = instructions;
  }
  // Output the Pizza order
  describe() {
    return `Your order has been placed. You've ordered a ${
      this.size
    } pizza with ${this.crust} crust, ${this.sauce} sauce, ${
      this.cheese
    } cheese, toppings: ${this.toppings.join(", ")}, and special instructions ${
      this.instructions
    }.`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Handle order button click
  const orderButton = document.getElementById("orderButton");
  orderButton.addEventListener("click", function () {
    // Capture and display student info
    const name = document.getElementById("studentName").value;
    const number = document.getElementById("studentNumber").value;
    studentInfo.textContent = `Student Name: ${name} - Student Number: ${number}`;

    // Process pizza order
    const size = document.getElementById("size").value;
    const crust = document.querySelector('input[name="crust"]:checked').value;
    const sauce = document.querySelector('input[name="sauce"]:checked').value;
    const cheese = document.querySelector('input[name="cheese"]:checked').value;
    const instructions = document.querySelector(
      'input[name="instruction"]:checked'
    ).value;
    const toppings = Array.from(
      document.querySelectorAll('input[name="topping"]:checked')
    ).map((t) => t.value);

    // Create a new Pizza object using the class
    const pizzaOrder = new Pizza(
      size,
      crust,
      toppings,
      sauce,
      cheese,
      instructions
    );
    orderDescription.textContent = pizzaOrder.describe();
  });
});
