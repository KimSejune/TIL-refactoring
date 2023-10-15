class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

export class Order {
  constructor(data) {
    this._priority = data._priority;
  }
  get priorityString() {
    return this._priority.toString();
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

const Prioritys = ["high", "high", "high", "rush", "rush", "high"];

const orders = Prioritys.map((priority) => {
  return new Order(priority);
});

export const highPriorityCount = orders.filter(
  (o) => "high" === o.priorityString || "rush" === o.priorityString
).length;
