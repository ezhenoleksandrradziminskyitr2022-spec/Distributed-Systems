// Function to calculate factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Function to calculate age
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate.split('.').reverse().join('-'));

  const diffTime = today - birth;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let years = today.getFullYear() - birth.getFullYear();

  // Adjust year if birthday hasn't happened yet this year
  const hasHadBirthday =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
          today.getDate() >= birth.getDate());

  if (!hasHadBirthday) {
    years--;
  }

  return { years, days: diffDays };
}

// Main program (Node.js environment)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("HELLo World!");

readline.question("Please, enter your name: ", (name) => {
  console.log(`Hello, ${name}!`);

  const length = name.length;
  console.log(`Your name has ${length} letters. ${length}! = ${factorial(length)}`);

  readline.question(
      "Please, enter your birth date in format (DD.MM.YYYY): ",
      (birthDate) => {
        const age = calculateAge(birthDate);

        const today = new Date();
        const formattedToday = today
            .toLocaleDateString('en-GB')
            .replace(/\//g, '.');

        console.log(
            `Today is ${formattedToday}, you are ${age.years} year (${age.days} days) old.`
        );

        readline.close();
      }
  );
});
