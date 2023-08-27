import { Province } from "./Province.js";
import { sampleProvinceData } from "./sample.js";
import * as assert from "assert";

describe("Province", () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", () => {
    assert.equal(asia.shortfall, 5);
  });

  it("profit", () => {
    assert.equal(asia.profit, 230);
  });

  it("change production", () => {
    asia.producers[0].production = 20;
    assert.equal(asia.shortfall, -6);
    assert.equal(asia.profit, 292);
  });

  it("zero demand", () => {
    asia.demand = 0;
    assert.equal(asia.shortfall, -25);
    assert.equal(asia.profit, 0);
  });

  it("negative demand", () => {
    asia.demand = -1;
    assert.equal(asia.shortfall, -26);
    assert.equal(asia.profit, -10);
  });

  it("empty string demand", () => {
    asia.demand = "";
    assert.equal(asia.shortfall, NaN);
    assert.equal(asia.profit, NaN);
  });
});

describe("no producers", () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", () => {
    assert.equal(noProducers.shortfall, 30);
  });

  it("profit", () => {
    assert.equal(noProducers.profit, 0);
  });
});

describe("string for producers", () => {
  it("", () => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    const producers = new Province(data);
    assert.equal(producers.shortfall, 30);
  });
});
