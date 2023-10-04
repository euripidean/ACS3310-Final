const { formatPhoneNumber } = require("../dist/index");

describe("readPhoneNumber", () => {
  it("should convert a ten digit string into a human readable format", () => {
    expect(formatPhoneNumber("1234567890")).toEqual("(123) 456-7890");
  });

  it("should convert a ten digit number into a human readable format", () => {
    expect(formatPhoneNumber(1234567890)).toEqual("(123) 456-7890");
  });

  it("should throw an error if the input is not a string or number of ten digits", () => {
    expect(() => formatPhoneNumber({})).toThrow(
      "Phone number must be 10 digits"
    );
  });
});
