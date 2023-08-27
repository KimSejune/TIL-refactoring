import { Producer } from "./Producer.js";

export class Province {
  constructor(doc) {
    this._name = doc.name;
    this._producers = []; // 생산자
    this._totalProduction = 0; // 총 생산량
    this._demand = doc.demand; // 수요
    this._price = doc.price; // 가격
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  get name() {
    return this._name;
  }
  get producers() {
    return this._producers.slice();
  }
  get totalProduction() {
    return this._totalProduction;
  }

  set totalProduction(arg) {
    this._totalProduction = arg;
  }
  get demand() {
    return this._demand;
  }
  set demand(arg) {
    this._demand = parseInt(arg);
  }
  get price() {
    return this._price;
  }
  set price(arg) {
    this._price = parseInt(arg);
  }

  addProducer(arg) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  // 부족분
  get shortfall() {
    return this._demand - this.totalProduction;
  }

  // 총수익
  get profit() {
    return this.demandValue - this.demandCost;
  }

  get demandValue() {
    return this.satisfiedDemand * this.price;
  }

  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }

  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
    return result;
  }
}
