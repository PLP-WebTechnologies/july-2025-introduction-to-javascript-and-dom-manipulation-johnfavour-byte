// =========================
// Part 1: Variables & Conditionals
// =========================
function checkAge() {
  const age = document.getElementById("ageInput").value;
  const result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You are an adult ✅";
  } else if (age > 0) {
    result.textContent = "You are still a minor ❌";
  } else {
    result.textContent = "Please enter a valid age.";
  }
}

// =========================
// Part 2: Functions
// =========================
function showGreeting(name) {
  document.getElementById("greeting").textContent = `Hello, ${name}! 👋`;
}

// A reusable function for totals
function calculateTotal(a, b) {
  return a + b;
}
console.log("Total of 5 + 3 =", calculateTotal(5, 3));

// =========================
// Part 3: Loops
// =========================
function listNumbers() {
  const list = document.getElementById("numberList");
  list.innerHTML = ""; // clear before adding

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
}

// Example of while loop in console
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// =========================
// Part 4: DOM Manipulation
// =========================

// Change background color on button click
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f5f5f5" : "lightblue";
});

// Add items dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New dynamic item 🆕";
  document.getElementById("dynamicList").appendChild(li);
});

// Toggle content
function toggleGreeting() {
  const greeting = document.getElementById("greeting");
  greeting.textContent =
    greeting.textContent === "" ? "Hello again! 👋" : "";
}