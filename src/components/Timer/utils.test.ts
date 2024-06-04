import { formatNumber, formatTime } from "./utils";

describe("formatNumber func", () => {
  it("should format undefined", () => {
    const number = formatNumber(undefined);
    expect(number).toEqual("00");
  });

  it("should format one digit number", () => {
    const number = formatNumber(0);
    expect(number).toEqual("00");
  });

  it("should format two digit number", () => {
    const number = formatNumber(10);
    expect(number).toEqual("10");
  });
});

describe("formatTime func", () => {
  it("should format 0 sec", () => {
    const time = formatTime(0);
    expect(time).toEqual("00:00");
  });

  it("should format 120 sec", () => {
    const time = formatTime(120);
    expect(time).toEqual("02:00");
  });

  it("should format 600 sec", () => {
    const time = formatTime(600);
    expect(time).toEqual("10:00");
  });
});
