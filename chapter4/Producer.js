export class Producer {
  constructor(aProvince, data) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }
  get cost() {
    return this._cost;
  }

  set cost(value) {
    this._cost = parseInt(value);
  }

  get name() {
    return this._name;
  }

  get production() {
    return this._production;
  }

  set production(amountStr) {
    const amount = parseInt(amountStr);
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    // 변화량 만큼을 기존 값에 더해서 갱신해준다.
    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}
