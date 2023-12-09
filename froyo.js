let input = prompt("Please enter a list of comma-separated froyo flavors");
//vanilla,vanilla,vanilla,strawberry,coffee,coffee
console.log("You have ordered " + input + " .");

let froyoFlavors = input.split(",");
console.log(froyoFlavors);

const orderList = [
  { name: "Vanilla", orders: 3, price: 1.5 },
  { name: "Strawberry", orders: 1, price: 1.5 },
  { name: "Coffee", orders: 2, price: 1.5 },
];

orderList.unshift(prompt.value);
