import _ from "lodash";
import * as assert from "assert";
import { compareUsage, setRawDataOfCustomer } from "./CustomerHashmap.js";

const dummyCustomerData = {
  1920: {
    name: "마틴 파울러",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
  38673: {
    name: "닐 포드",
    id: "38673",
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
};

describe("CustomerHashmap test", () => {
  it("compareUsage", () => {
    // given
    const customerData = _.cloneDeep(dummyCustomerData);
    setRawDataOfCustomer(customerData);
    const customerId = 1920;
    // when
    const result = compareUsage(customerId, 2016, 1);
    // then
    assert.equal(result.laterAmount, 50);
    assert.equal(result.change, -20);
  });
});
