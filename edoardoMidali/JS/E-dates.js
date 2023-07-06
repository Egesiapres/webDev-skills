console.log('------ ⌚️ %cDates', 'font-weight: bold;');

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
  'E3: Write a code that gets the current month (month number) and displays it in the console'
);

const currentMonth = currentDate.getMonth();
console.log('Current month:', currentMonth);

// E4
console.log(
  'E4: Write a code that gets the current year and displays it in the console'
);

const currentYear = currentDate.getFullYear();
console.log('Current year:', currentYear);

// E5
console.log(
  'E5: Write a code that takes a month number as input and returns the number of days in that month'
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
  'E6: Write code that takes the date of birth as input and calculates the current age'
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
console.log(
  'E7: Write a code that takes two dates as input and calculates the difference in days between the two dates'
);

const getDifferenceInDays = (date1, date2) => {
  const diff = Math.abs(date1 - date2);
  const dayMilliseconds = 24 * 60 * 60 * 1000;

  return `They've past ${Math.floor(
    diff / dayMilliseconds
  )} days since I've the reached the major age`;
};

const daysFromMajorAge = getDifferenceInDays(
  currentDate,
  new Date(2015, 10, 1)
);
console.log(daysFromMajorAge);

// E8
console.log(
  'E8: Write code that takes a date as input and checks whether it is a future date versus the current date'
);

const isFutureDate = date => {
  const diff = date.setMilliseconds(0) - currentDate.setMilliseconds(0);

  if (diff > 0) {
    console.log(`The date ${date.toLocaleDateString()} is a future date`);
  } else if (diff < 0) {
    console.log(`The date ${date.toLocaleDateString()} is a past date`);
  } else {
    console.log(`The date ${date.toLocaleDateString()} is the present date`);
  }
};

isFutureDate(new Date(2023, 10, 1));
isFutureDate(new Date(2022, 1, 1));
isFutureDate(new Date());

// or
const isFutureDate1 = date => {
  return date > currentDate;
};

const mumDayOfBirth = new Date(1967, 7, 8);
console.log(
  `Is mum's day (${mumDayOfBirth.toLocaleDateString()}) of birth a future day?`,
  isFutureDate1()
);

// E9
console.log(
  'E9: Write code that takes a date as input and formats it into a string in the format "dd/mm/yyyyy"'
);

const formatDate = date => {
  const addZero = number => {
    return number < 10 && 0;
  };

  const day = `${addZero(date.getDate())}${date.getDate()}`;
  const month = `${addZero(date.getMonth() + 1)}${date.getMonth() + 1}`;
  const year = `${date.getFullYear()}`;

  return `${day}/${month}/${year}`;
};

const formattedCurrentDate = formatDate(currentDate);
console.log(formattedCurrentDate);

// or
const formatDate1 = date => {
  // initial 0 if needed
  // (2: string lenght, '0': char to add if the string length is less than the specified one)
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  return `${day}/${month}/${year}`;
};

const formattedDateOfBirth = formatDate1(dateOfBirth);
console.log(formattedDateOfBirth);

// E10
console.log(
  'E10: Scrivi un codice che prenda una data come input e restituisca il nome del giorno della settimana corrispondente'
);

const getWeekDay = date => {
  const weekDays = [
    { name: 'Lunedì', number: 1 },
    { name: 'Martedì', number: 2 },
    { name: 'Mercoledì', number: 3 },
    { name: 'Giovedì', number: 4 },
    { name: 'Venerdì', number: 5 },
    { name: 'Sabato', number: 6 },
    { name: 'Domenica', number: 7 },
  ];

  const matchedWeekDay = weekDays.find(
    ({ number }) => number === date.getDay()
  );

  return matchedWeekDay.name;
};

const currentDateWeekDay = getWeekDay(currentDate);
console.log(currentDateWeekDay);

// or
const getWeekDay1 = date => {
  const weekDays = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ];

  return weekDays[date.getDay()];
};

const dateOfBirthWeekDay = getWeekDay1(dateOfBirth);
console.log(dateOfBirthWeekDay);
