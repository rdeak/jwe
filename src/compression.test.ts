import { compress, decompress } from "./compression";
import { describe, it, expect } from "vitest";

describe("compression", () => {
  it("should compress and decompress successfully", async () => {
    const payload = { a: 1 };

    expect(await decompress(await compress(payload))).toEqual(payload);
  });
});
