import { PerformanceCalculator } from "./PerformanceCalculator.js";

export class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }

  get volumeCreditsFor() {
    return super.volumeCreditsFor;
  }
}
