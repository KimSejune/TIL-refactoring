import { createStatementData } from "./CreateStatementData.js";
import invoices from "./invoices.json" assert { type: "json" };
import plays from "./plays.json" assert { type: "json" };
import * as assert from "assert";
import _ from "lodash";

describe("CreateStatementData", () => {
  it("createStatementData", () => {
    // given
    const invoice = _.cloneDeep(invoices[0]);
    const play = _.cloneDeep(plays);

    // when
    const result = createStatementData(invoice, play);

    // then
    const expected = {
      customer: "BigCo",
      performances: [
        {
          playID: "hamlet",
          audience: 55,
          play: {
            name: "Hamlet",
            type: "tragedy",
          },
          amount: 65000,
          volumeCredits: 25,
        },
        {
          playID: "as-like",
          audience: 35,
          play: { name: "As You Like It", type: "comedy" },
          amount: 58000,
          volumeCredits: 12,
        },
        {
          playID: "othello",
          audience: 40,
          play: {
            name: "Othello",
            type: "tragedy",
          },
          amount: 50000,
          volumeCredits: 10,
        },
      ],
      totalAmount: 173000,
      totalVolumeCredits: 47,
    };
    assert.deepEqual(result, expected);
  });
});
