export class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error("서브 클래스에서 처리하도록 설계");
  }

  get volumeCreditsFor() {
    return Math.max(this.performance.audience - 30, 0);
  }
}
``;
