const { readPhoneNumber } = require("../dist/index");

describe("readPhoneNumber", () => {
  it("should convert a ten digit number into a human readable format", () => {
    expect(readPhoneNumber("1234567890")).toEqual("(123) 456-7890");
  });
});
