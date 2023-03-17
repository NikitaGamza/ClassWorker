class Worker {
  constructor(firstName, surName, rate, days) {
    this.firstName = firstName;
    this.surName = surName;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

const myWorker1 = new Worker('Ivan', 'Ivanov', 1.6, 30);
const myWorker2 = new Worker('Semen', 'Semenov', 2, 30);
// console.log(myWorker1.getSalary() + myWorker2.getSalary());

class ModifiedWorker {
  #firstName;
  #surName;
  #rate;
  #days;
  constructor(firstName, surName, rate, days) {
    this.#firstName = firstName;
    this.#surName = surName;
    this.#rate = rate;
    this.#days = days;
  }
  get firstName() {
    return this.#firstName;
  }
  get surName() {
    return this.#surName;
  }
  get days() {
    return this.#days;
  }
  get rate() {
    return this.#rate;
  }
  setRate(value) {
    this.#rate = value;
  }
  setDays(value) {
    this.#days = value;
  }
}

const newWorker = new ModifiedWorker('Alex', 'Krasnov');
newWorker.setDays(20);
newWorker.setRate(1.8);
console.log(newWorker.firstName);
