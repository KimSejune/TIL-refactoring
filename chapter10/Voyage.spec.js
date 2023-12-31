import _ from "lodash";
import * as assert from "assert";
import { rating } from "./Voyage.js";

const dummyData = {
  voyage: { zone: "서인도", length: 10 },
  history: [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ],
};

describe("투자 등급을 조회한다.", () => {
  it("voyage zone이 중국이 아닌 경우 투자 등급을 조회한다.", () => {
    // given
    const { voyage, history } = _.cloneDeep(dummyData);
    // when
    const myRating = rating(voyage, history);
    // then
    assert.equal(myRating, "B");
  });

  it("voyage zone이 중국인 경우 투자 등급을 조회한다.", () => {
    // given
    const voyage = { zone: "중국", length: 10 };
    const { history } = _.cloneDeep(dummyData);

    // when
    const myRating = rating(voyage, history);
    // then
    assert.equal(myRating, "A");
  });
});
