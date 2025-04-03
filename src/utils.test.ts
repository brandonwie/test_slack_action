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

    it("should add zero correctly", () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    it("should add large numbers correctly", () => {
      expect(add(1000, 2000)).toBe(3000);
    });

    it("should handle decimal numbers", () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
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

    it("should multiply by zero correctly", () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    it("should multiply by one correctly", () => {
      expect(multiply(5, 1)).toBe(5);
      expect(multiply(1, 5)).toBe(5);
    });
  });
});
