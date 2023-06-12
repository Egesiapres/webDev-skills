// E1
console.log(
  'E1: Write a code that gets the current date and displays it in console'
);

const currentDate = new Date();
console.log('Current date:', currentDate);

// E2
console.log(
  'E2: Write a code that gets the current day (weekday number) and displays it in the console'
);

const currentDay = currentDate.getDate();
console.log('Current day:', currentDay);

// E3
console.log(
  'Write a code that gets the current month (month number) and displays it in the console'
);

const currentMonth = currentDate.getMonth();
console.log('Current month:', currentMonth);

// E4
console.log(
  'E3: Write a code that gets the current year and displays it in the console'
);

const currentYear = currentDate.getFullYear();
console.log('Current year:', currentYear);

// E5
console.log(
  'E4: Write a code that takes a month number as input and returns the number of days in that month'
);

const months = [
  { month_name: 'Genuary', month_days: 31 },
  { month_name: 'February', month_days: 28 },
  { month_name: 'March', month_days: 31 },
  { month_name: 'April', month_days: 30 },
  { month_name: 'May', month_days: 31 },
  { month_name: 'June', month_days: 30 },
  { month_name: 'July', month_days: 31 },
  { month_name: 'August', month_days: 31 },
  { month_name: 'September', month_days: 30 },
  { month_name: 'October', month_days: 31 },
  { month_name: 'November', month_days: 30 },
  { month_name: 'December', month_days: 31 },
];

const randomMonth = Math.floor(Math.random() * 12);
console.log('Random month:', randomMonth);

const randomDay = Math.floor(Math.random() * 32);
console.log('Random day:', randomDay);

months.forEach(
  ({ month_name, month_days }, i) =>
    randomMonth === i && console.log(`${month_name} has ${month_days} days`)
);

// better
const getMonthDays = (year, month) => {
  const randomDate = new Date(year, month, 0);
  const monthDays = randomDate.getDate();

  console.log(`The month number ${month} has ${monthDays} days`);
};

getMonthDays(currentYear, randomMonth);

// E6
console.log(
  'E5: Write code that takes the date of birth as input and calculates the current age'
);

const dateOfBirth = new Date(1996, 10, 1);
console.log(dateOfBirth.getTime());

// ms: /1000
// s: /60
// m: /60
// h: /24
// g: /365

let currentAge = Date.now() - dateOfBirth.getTime();
currentAge = Math.floor(currentAge / (1000 * 60 * 60 * 24 * 365));
console.log(
  `I am born the ${dateOfBirth.toLocaleDateString()}. As now, I am ${currentAge} years old`
);

// or (creating a f)
const getCurrentAge = date => {
  const diffYears = currentYear - date.getFullYear();
  const diffMonths = currentMonth - date.getMonth();
  const diffDays = currentDay - date.getDate();

  if (diffMonths < 0 || (diffMonths === 0 && diffDays < 0)) {
    return diffYears - 1;
  } else {
    return diffYears;
  }
};

currentAge = getCurrentAge(dateOfBirth);
console.log(
  `Being the inserted date of birth ${dateOfBirth.toLocaleDateString()}, the current age computed is ${currentAge} `
);

// E7
