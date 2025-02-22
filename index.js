// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// Input

// the initial population is p0 = 1000
// the population increase by percent = 2% per year
// the new inhabitants come to live in the town is 50
// the target population is p = 1200

// Output
// number of years to get the population greater than or equal to p.

function yearToReactPopulation(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    years++;
  }
  return years;
}
console.log(yearsToReachPopulation(1000, 2, 50, 1200));
