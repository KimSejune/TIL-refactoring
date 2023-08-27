import { getOrganization, organization } from "./Organization.js";
import * as assert from "assert";

describe("Organization", () => {
  const originalName = "애크미 구스베리";
  const originalCountry = "GB";

  it("name country equal test", () => {
    assert.equal(organization._name, originalName);
    assert.equal(organization._country, originalCountry);
  });

  it("getOrganization test", () => {
    assert.equal(getOrganization().name, originalName);
    assert.equal(getOrganization().country, originalCountry);
  });
});
