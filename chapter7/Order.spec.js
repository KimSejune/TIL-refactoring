import { highPriorityCount, Order } from "./Order.js";
import _ from "lodash";
import * as assert from "assert";

const dummyPriority = ["high", "high", "high", "rush", "rush", "high"];

describe("Order test", () => {
  it("highPriorityCount test", () => {
    const result = highPriorityCount;

    assert.equal(result, 4);
  });
});
