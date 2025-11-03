const { DateTime } = require("luxon");


//1
// const birth = DateTime.fromObject({ year: 1990, month: 12, day: 28 });
// const now = DateTime.now();
// const diffDays = now.diff(birth, "days").days;
// console.log(`Days since birth: ${Math.floor(diffDays)}`);


// //2
// const diff = now.diff(birth, ["years", "months", "days"]).toObject();
// const years = Math.floor(diff.years);
// const months = Math.floor(diff.months);
// const days = Math.floor(diff.days);

// console.log(`${years} years, ${months} months, and ${days} days`);

//3
const d1 = DateTime.fromISO("1981-10-15");
const d2 = DateTime.fromISO("1990-12-28");
const now = DateTime.now();
const diff1 = Math.abs(now.diff(d1).milliseconds);
const diff2 = Math.abs(now.diff(d2).milliseconds);
const closest = diff1 < diff2 ? d1 : d2;

console.log(`Closest date is ${closest.toISODate()}`);
//4
if (d1 < d2) {
  console.log(`${d1.toISODate()} is before ${d2.toISODate()}`);
} else if (d1 > d2) {
  console.log(`${d1.toISODate()} is after ${d2.toISODate()}`);
} else {
  console.log("The dates are the same.");
}

//5
const londonTime = DateTime.now().setZone("Europe/London");
console.log(`Current time in London is :${londonTime.toLocaleString(DateTime.DATETIME_FULL)}`)