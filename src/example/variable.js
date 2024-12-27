export function variable() {
  // Variable: A storage unit used to hold any type of information or data.

  // var: Used to declare a standard variable.
  var example = "123";

  // let: Used to declare a block-scoped local variable.
  let example1 = "123";

  // const: Used to declare a constant variable.
  const example2 = "123";

  // Variable Naming Rules:
  // 1. Variable names should always be meaningful.
  // Example:
  let age = 25; // Good: Describes the data being stored.
  let x = 25; // Avoid: Not descriptive.

  // 2. Variable names must start with a letter.
  // Example:
  let name = "John"; // Valid
  // let 1name = "John"; // Invalid: Cannot start with a number.

  // 3. Variable names can start with an underscore (_) character.
  // Example:
  let _privateVariable = "secret"; // Valid

  // 4. Variable names can start with a dollar sign ($) character.
  // Example:
  let $price = 99.99; // Valid

  // 5. Variable names cannot start with a digit, but digits can be used after the first character.
  // Example:
  let item2 = "Laptop"; // Valid
  // let 2item = "Laptop"; // Invalid: Starts with a number.

  // 6. Variable names are case-sensitive.
  // Example:
  let apple = "fruit";
  let Apple = "brand";
  console.log(apple); // Outputs: "fruit"
  console.log(Apple); // Outputs: "brand"

  // 7. If the same variable name is declared multiple times, the value of the variable will always be the one assigned last.
  // Example:
  let color = "red";
  color = "blue"; // The value of `color` is now "blue".
  console.log(color); // Outputs: "blue"

  // 8. Variable names cannot be reserved keywords in JavaScript.
  // Example:
  // let let = "value"; // Invalid: `let` is a reserved keyword.
  let keywordExample = "valid"; // Valid
}
