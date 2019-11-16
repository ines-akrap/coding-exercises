// Modify weeklyTemps

class monthTemps {
  constructor() {
    this.dataStore = [];
  }
  add(temp) {
    if (this.dataStore.length && this.dataStore[this.dataStore.length - 1].length < 7) {
      this.dataStore[this.dataStore.length - 1].push(temp);
      return;
    }
    this.dataStore.push([temp]);
  }
  getTotalWeek(week) {
    return this.dataStore[week].reduce((currentTempSum, temp) => currentTempSum + temp);
  }
  getTotalMonth() {
    let sum = 0;
    for (let i in this.dataStore) {
      sum += this.getTotalWeek(i);
    }
    return sum;
  }
  getWeekAverage(week) {
    return this.getTotalWeek(week) / this.dataStore[week].length;
  }
  getTotalAverage() {
    return this.getTotalMonth / this.dataStore.length;
  }
}

// TESTS
const January = new monthTemps();
January.add(5);
January.add(6);
January.add(2);
January.add(2);
January.add(4);
January.add(6);
January.add(6);
January.add(7);
January.add(8);
January.add(3);
January.add(5);
January.add(8);
January.add(8);
January.add(5);
January.add(4);
January.add(4);
January.add(2);
January.add(0);
January.add(3);
January.add(3);
January.add(3);
January.add(5);
January.add(5);
January.add(5);
console.log(January.getTotalWeek(0));
console.log(January.getTotalWeek(1));
console.log(January.getTotalMonth());
console.log(January.getWeekAverage(0));
console.log(January.getWeekAverage(1));
console.log(January.getTotalAverage());
