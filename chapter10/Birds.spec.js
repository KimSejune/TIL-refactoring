import { plumages, speeds } from "./Birds.js";
import _ from "lodash";
import * as assert from "assert";

const dummyBirds = [
  { name: "유럽 제비", type: "유럽 제비" },
  { name: "아프리카 제비", type: "아프리카 제비", numberOfCoconuts: 1 },
  {
    name: "노르웨이 파랑 앵무",
    type: "노르웨이 파랑 앵무",
    voltage: 10,
    isNailed: true,
  },
];

describe("birds 정보를 조회한다.", () => {
  describe("조건에 따른 깃털 상태를 반환한다.", () => {
    it("유렵 제비는 '보통이다'를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);

      // when
      const result = plumages(birds);

      // then
      assert.equal(result.get("유럽 제비"), "보통이다");
    });
    it("아프리카 제비의 numberOfCoconuts <= 2 경우 '보통이다'를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);

      // when
      const result = plumages(birds);

      // then
      assert.equal(result.get("아프리카 제비"), "보통이다");
    });
    it("아프리카 제비의 numberOfCoconuts > 2 경우 '지쳤다'를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);
      birds.push({
        name: "아프리카 제비",
        type: "아프리카 제비",
        numberOfCoconuts: 3,
      });

      // when
      const result = plumages(birds);

      // then
      assert.equal(result.get("아프리카 제비"), "지쳤다");
    });
    it("노르웨이 파랑 앵무 voltage <= 100 '예쁘다'를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);

      // when
      const result = plumages(birds);

      // then
      assert.equal(result.get("노르웨이 파랑 앵무"), "예쁘다");
    });
    it("노르웨이 파랑 앵무 voltage > 100 '그을렸다'를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);
      birds.push({
        name: "노르웨이 파랑 앵무",
        type: "노르웨이 파랑 앵무",
        voltage: 200,
        isNailed: true,
      });
      // when
      const result = plumages(birds);

      // then
      assert.equal(result.get("노르웨이 파랑 앵무"), "그을렸다");
    });
    it("모르는 새의 경우 '알 수 없다'를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);
      birds.push({ name: "벌새", type: "벌새" });

      // when
      const result = plumages(birds);

      // then
      assert.equal(result.get("벌새"), "알 수 없다");
    });
  });

  describe("조건에 따른 비행 속도를 반환한다.", () => {
    it("유럽 제비는 35를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);

      // when
      const result = speeds(birds);

      // then
      assert.equal(result.get("유럽 제비"), 35);
    });
    it("아프리카 제비는 40 - 2 * numberOfCoconuts 를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);

      // when
      const result = speeds(birds);

      // then
      assert.equal(result.get("아프리카 제비"), 38);
    });
    it("노르웨이 파랑 앵무는 isNailed true면 0를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);

      // when
      const result = speeds(birds);

      // then
      assert.equal(result.get("노르웨이 파랑 앵무"), 0);
    });
    it("노르웨이 파랑 앵무는 isNailed false 면 10 + voltage/10 를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);
      birds.push({
        name: "노르웨이 파랑 앵무",
        type: "노르웨이 파랑 앵무",
        voltage: 30,
        isNailed: false,
      });
      // when
      const result = speeds(birds);

      // then
      assert.equal(result.get("노르웨이 파랑 앵무"), 13);
    });
    it("모르는 새의 경우 null를 반환한다.", () => {
      // given
      const birds = _.cloneDeep(dummyBirds);
      birds.push({
        name: "벌새",
        type: "벌새",
      });
      // when
      const result = speeds(birds);

      // then
      assert.equal(result.get("벌새"), null);
    });
  });
});
