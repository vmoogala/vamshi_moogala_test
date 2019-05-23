const { versionComparer, getDecimalPart } = require("./versionComparer.js");

describe("Testing the version comparer function", () => {
  test("passing empty arguments will throw an error", () => {
    expect(() => {
      versionComparer();
    }).toThrow("Some values are missing");
  });

  test("1 == 1", () => {
    expect(versionComparer("1", "1")).toBe("1 is equal to 1");
  });

  test("2 > 1", () => {
    expect(versionComparer("2", "1")).toBe("2 is greater than 1");
  });

  test("1 < 2", () => {
    expect(versionComparer("1", "2")).toBe("1 is less than 2");
  });

  test("1.1 == 1.1", () => {
    expect(versionComparer("1.1", "1.1")).toBe("1.1 is equal to 1.1");
  });

  test("1.0 == 1", () => {
    expect(versionComparer("1.0", "1")).toBe("1.0 is equal to 1");
  });

  test("2 > 1.1", () => {
    expect(versionComparer("2", "1.1")).toBe("2 is greater than 1.1");
  });

  test("1.1 > 1", () => {
    expect(versionComparer("1.1", "1")).toBe("1.1 is greater than 1");
  });

  test("1 < 1.1", () => {
    expect(versionComparer("1", "1.1")).toBe("1 is less than 1.1");
  });

  test("1.2 > 1.1", () => {
    expect(versionComparer("1.2", "1.1")).toBe("1.2 is greater than 1.1");
  });

  test("1.1 < 1.2", () => {
    expect(versionComparer("1.1", "1.2")).toBe("1.1 is less than 1.2");
  });

  test("1.1.1 == 1.1.1", () => {
    expect(versionComparer("1.1", "1.1")).toBe("1.1 is equal to 1.1");
  });

  test("1.1.0 == 1.1", () => {
    expect(versionComparer("1.1.0", "1.1")).toBe("1.1.0 is equal to 1.1");
  });

  test("1.1.1 > 1.1", () => {
    expect(versionComparer("1.1.1", "1.1")).toBe("1.1.1 is greater than 1.1");
  });

  test("1.1.1 < 1.1.2", () => {
    expect(versionComparer("1.1.1", "1.1.2")).toBe("1.1.1 is less than 1.1.2");
  });

  test("1.2 > 1.1.1", () => {
    expect(versionComparer("1.2", "1.1.1")).toBe("1.2 is greater than 1.1.1");
  });
});

describe("Testing the helper functions", () => {
  test("decimal part of '1.1' is '1'", () => {
    expect(getDecimalPart("1.1")).toBe("1");
  });

  test("decimal part of '1' is '0'", () => {
    expect(getDecimalPart("1")).toBe("0");
  });

  test("decimal part of '1.1.1' is '1.1'", () => {
    expect(getDecimalPart("1.1.1")).toBe("1.1");
  });
});
