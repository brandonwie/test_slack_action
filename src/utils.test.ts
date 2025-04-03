import { describe, it, expect } from "@jest/globals";
import { add, multiply } from "./utils";

describe("Utils", () => {
  describe("add", () => {
    it("should add two positive numbers correctly", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(2, -3)).toBe(-1);
      expect(add(-2, -3)).toBe(-5);
    });

    // Failing test
    it("FAILING TEST: should fail on purpose", () => {
      expect(add(2, 2)).toBe(5); // 2+2=4, not 5
    });
  });

  describe("multiply", () => {
    it("should multiply two positive numbers correctly", () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it("should handle negative numbers", () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(2, -3)).toBe(-6);
      expect(multiply(-2, -3)).toBe(6);
    });

    // Failing test
    it("FAILING TEST: should fail to demonstrate workflow failure", () => {
      expect(multiply(3, 3)).toBe(10); // 3*3=9, not 10
    });
  });
});
